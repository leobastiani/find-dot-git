import React, { useMemo, useState } from "react";
import { Text } from "ink";
import create from "zustand";
import TimeDiff from "../TimeDiff";

export const useNowStore = create((set) => ({
  now: new Date(),
  resetNow() {
    set({ now: new Date() });
  },
}));

export default function Timer() {
  const now = useNowStore((state) => state.now);
  const start = useMemo(() => new Date(), []);
  return <TimeDiff start={start} end={now} />;
}
