import React, { useState, useEffect, useMemo } from "react";
import { Text } from "ink";
import TimeAgo from "javascript-time-ago";

module.exports = function TimeDiff({ start, end }) {
  return (
    <Text>
      {new TimeAgo().format(Date.now() - (end.getTime() - start.getTime()), "round")}
    </Text>
  );
};

// module.exports = function Timer({ children: start }) {
//   const [now, setNow] = useState(() => new Date());
//   const [createdAt] = useState(() => new Date());
//   useState(
//     () =>
//       (instances = _.sortBy([...instances, { createdAt, start }], `createdAt`))
//   );
//   const instanceId = useMemo(() => _.findIndex(instances, { createdAt }), [
//     createdAt,
//     instances,
//   ]);
//   useEffect(() => {
//     const fn = () => {
//       setNow(new Date());
//     };
//     ee.on("tick", fn);

//     return () => {
//       instances = instances.filter(
//         (instance) => instance.createdAt != createdAt
//       );
//       ee.off("tick", fn);
//     };
//   }, []);

//   const percentage = useMemo(() => {
//     const maxElapsed = _(instances)
//       .map("start")
//       .map((start) => now - start)
//       .max();
//     const from = now.getTime() - start.getTime();
//     return (1 / -maxElapsed) * from + 1;
//   }, [instances, start, now]);

//   return (
//     <Text
//       color={`rgb(${Math.floor((1 - percentage) * 255)}, ${Math.floor(
//         percentage * 255
//       )}, 0)`}
//     >
//       {timeAgo.format(start, "round")}
//     </Text>
//   );
// };