import figures from "figures";
import { Box, Text, useApp, useInput, useStdin } from "ink";
import React, { useEffect, useMemo, useState } from "react";
import { DirSkipper } from "../../services/DirSkipper";
import { DirSkipYielder } from "../../services/DirSkipYielder";
import { DirYielder } from "../../services/DirYielder";
import { GitChecker } from "../../services/GitChecker";
import { GitGlober } from "../../services/GitGlober";
import path from "path";
import { CachedGlobFactory } from "../../services/CachedGlobFactory";
import Timer, { useNowStore } from "./Timer";
import usePrevious from "../../hooks/usePrevious";
import useSetFor from "../../hooks/useSetFor";
import args from "../../controllers/args";

const root = path.resolve("/");
const cachedGlobFactory = new CachedGlobFactory();

const gitGlobber = new GitGlober(
  new DirSkipYielder(new DirYielder(cachedGlobFactory), new DirSkipper()),
  new GitChecker(),
  cachedGlobFactory
);

export default function App() {
  const [output, setOutput] = useState([]);

  const [cwd, setCwd] = useState(() => root);
  const [finished, setFinished] = useState(false);

  const resetNow = useNowStore((state) => state.resetNow);

  useEffect(() => {
    setInterval(resetNow, 1000);
    gitGlobber.on("cwd", (cwd) => setCwd(cwd));

    (async () => {
      for (const path of args["<paths>"]) {
        for await (const gitDir of gitGlobber.glob(path)) {
          setOutput((output) => [...output, gitDir.path]);
        }
      }
      setFinished(true);
    })();
  }, []);

  const parts = useMemo(() => cwd.split(/[\/\\]+/), [cwd]);

  const [selected, setSelected] = useState(0);

  const { exit } = useApp();

  useEffect(() => {
    if (finished) {
      process.nextTick(() => {
        exit();
        process.nextTick(() => process.exit(0));
      });
    }
  }, [finished]);

  useEffect(() => {
    setSelected((selected) => Math.min(selected, parts.length - 1));
  }, [parts]);

  const skipDirDisplay = useMemo(
    () => path.resolve("/", ...parts.slice(0, selected + 1)),
    [parts, selected]
  );

  const previousSelected = usePrevious(selected);
  const [enabled, setEnabledFor] = useSetFor(true);
  useEffect(() => {
    if (selected == previousSelected) {
      setEnabledFor(false, 2000);
    }
  }, [selected, skipDirDisplay]);

  const { setRawMode } = useStdin();

  useEffect(() => {
    setRawMode(true);

    return () => {
      setRawMode(false);
    };
  });

  useInput((input, key) => {
    if (key.downArrow || key.rightArrow) {
      setSelected((selected) => Math.min(selected + 1, parts.length - 1));
    } else if (key.leftArrow || key.upArrow) {
      setSelected((selected) => Math.max(selected - 1, 0));
    } else if (input == "q" || (input == "c" && key.ctrl)) {
      setFinished(true);
    } else if (key.return && enabled) {
      for (const storedPath in cachedGlobFactory.store) {
        if (storedPath.startsWith(skipDirDisplay)) {
          cachedGlobFactory.store[storedPath].abort();
        }
      }
    }
  });

  if (finished) {
    return <Text>{output.join("\n")}</Text>;
  }

  return (
    <Box flexDirection="column">
      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Box flexGrow={1} flexDirection="column">
          <Text>find-dot-git</Text>
          <Text>
            {enabled ? (
              <>Press ENTER to skip {skipDirDisplay}</>
            ) : (
              <>Waiting...</>
            )}
          </Text>
        </Box>
        <Text>Status: </Text>
        <Text color="green">Running {figures.circleFilled}</Text>
      </Box>

      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Text>Output: {output.join(", ")}</Text>
      </Box>

      <RenderPath selected={selected}>{parts}</RenderPath>
    </Box>
  );
}
function RenderPath({ selected, children: parts }) {
  return (
    <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
      <Box flexDirection="column" flexGrow={1} marginRight={1}>
        {parts.map((part, i) => (
          <Text key={`${part}-${i}`}>{part == '' ? ' ' : part}</Text>
        ))}
      </Box>

      <Box flexDirection="column" marginRight={3}>
        {parts.map((part, i) => (
          <Text key={`${part}-${i}`}>
            {selected == i ? figures.circleFilled : figures.circle}
          </Text>
        ))}
      </Box>

      <Box flexDirection="column" marginRight={1}>
        {parts.map((part, i) => (
          <Timer key={`${part}-${i}`} />
        ))}
      </Box>
    </Box>
  );
}
