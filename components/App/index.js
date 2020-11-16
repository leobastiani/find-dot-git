import figures from "figures";
import { Box, Text, useApp, useInput, useStdin } from "ink";
import React, { useEffect, useMemo, useState } from "react";
import { DirSkipper } from "../../services/DirSkipper";
import { DirSkipYielder } from "../../services/DirSkipYielder";
import { DirYielder } from "../../services/DirYielder";
import { GitChecker } from "../../services/GitChecker";
import { GitGlober } from "../../services/GitGlober";
import path from "path";

const root = path.resolve("/");

const dirSkipper = new DirSkipper();
const gitGlobber = new GitGlober(
  new DirSkipYielder(new DirYielder(), dirSkipper),
  new GitChecker()
);

export default function App() {
  const [output, setOutput] = useState([]);

  const [cwd, setCwd] = useState(() => root);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    gitGlobber.on("cwd", (cwd) => setCwd(cwd));

    (async () => {
      for await (const gitDir of gitGlobber.glob(root)) {
        setOutput((output) => [...output, gitDir.path]);
      }
      setFinished(true);
    })();
  }, []);

  const parts = useMemo(() => cwd.split(path.sep), [cwd]);

  const [selected, setSelected] = useState(0);

  const { exit } = useApp();

  useInput((input, key) => {
    if (key.downArrow || key.rightArrow) {
      setSelected((selected) => Math.min(selected + 1, parts.length - 1));
    } else if (key.leftArrow || key.upArrow) {
      setSelected((selected) => Math.max(selected - 1, 0));
    } else if (input == "q") {
      setFinished(true);
      process.nextTick(() => {
        exit();
        process.nextTick(() => process.exit(0));
      });
    }
  });

  useEffect(() => {
    setSelected((selected) => Math.min(selected, parts.length - 1));
  }, [parts]);

  if (finished) {
    return <Text>{output.join("\n")}</Text>;
  }

  return (
    <Box flexDirection="column">
      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Box flexGrow={1}>
          <Text>find-dot-git: {selected}</Text>
        </Box>
        <Text>Status: </Text>
        <Text color="green">Running {figures.circleFilled}</Text>
      </Box>

      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Text>Output:</Text>
        <Box flexDirection="column" paddingLeft={1}>
          {output.map((path) => (
            <Text key={path}>{path}</Text>
          ))}
        </Box>
      </Box>

      <RenderPath selected={selected}>{parts}</RenderPath>
    </Box>
  );
}
function RenderPath({ selected, children: parts }) {
  useInput((input, key) => {
    if (key.return) {
      dirSkipper.skipCwd.add(path.join(...selected));
    }
  });

  return (
    <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
      <Box flexDirection="column" flexGrow={1} marginRight={1}>
        {parts.map((part, i) => (
          <Text key={`${part}-${i}`}>{part}</Text>
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
          <Text key={`${part}-${i}`}>57 seconds ago</Text>
        ))}
      </Box>
    </Box>
  );
}
