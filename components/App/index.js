import React, { useState, useEffect, useMemo } from "react";
import { Box, Text } from "ink";
import figures from "figures";

export default function App() {
  return (
    <Box flexDirection="column">
      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Box flexGrow={1}>
          <Text>find-dot-git</Text>
        </Box>
        <Text>Status: </Text>
        <Text color="green">Running {figures.circleFilled}</Text>
      </Box>

      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Text>Output:</Text>
        <Box flexDirection="column" paddingLeft={1}>
          <Text>C:\ex1\.git</Text>
          <Text>C:\ex2\.git</Text>
          <Text>C:\ex3\.git</Text>
          <Text>C:\ex4\.git</Text>
          <Text>C:\ex5\.git</Text>
        </Box>
      </Box>

      <Box borderStyle="round" paddingLeft={1} paddingRight={1}>
        <Box flexDirection="column" marginRight={1}>
          <Text>C:\</Text>
          <Text>Program Files</Text>
          <Text>Microsoft</Text>
          <Text>Word</Text>
          <Text>...</Text>
        </Box>

        <Box flexDirection="column" marginRight={3}>
          <Text>{figures.circle}</Text>
          <Text>{figures.circle}</Text>
          <Text>{figures.circle}</Text>
          <Text>{figures.circle}</Text>
          <Text>{figures.circle}</Text>
        </Box>

        <Box flexDirection="column" marginRight={1}>
          <Text>57 seconds ago</Text>
          <Text>1 minute ago</Text>
          <Text>1 hour ago</Text>
          <Text>12 days ago</Text>
          <Text>165 seconds ago</Text>
        </Box>
      </Box>
    </Box>
  );
}
