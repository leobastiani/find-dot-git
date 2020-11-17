#!/usr/bin/env node

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

import React from "react";
import { render } from "ink";
import App from "./components/App";

render(<App />);
