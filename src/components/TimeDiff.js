import React, { useState, useEffect, useMemo } from "react";
import { Text } from "ink";
import TimeAgo from "javascript-time-ago";

export default function TimeDiff({ start, end }) {
  return (
    <Text>
      {new TimeAgo().format(
        Date.now() - (end.getTime() - start.getTime()),
        "round"
      )}
    </Text>
  );
}
