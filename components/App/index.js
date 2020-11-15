import React, { useState, useEffect, useMemo } from "react";
import { Box, Text } from "ink";
import figures from "figures";

export default function App() {
  return (
    <Box borderStyle="round">
      <Box flexGrow={1}>
        <Text>find-dot-git</Text>
      </Box>
      <Text>Status: </Text>
      <Text color="green">Running</Text>
      <Text>{figures.circleFilled}</Text>
    </Box>
  );
}
