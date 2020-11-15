import React, { useState, useEffect, useMemo } from "react";
import { Text } from "ink";

function useInstanceControl() {
  useInstanceControl.instances ||= [];

  const [instanceId] = useState(() => {
    const id = Math.random();
    useInstanceControl.instances = useInstanceControl.instances.concat(id);
    return id;
  });

  const instanceIndex = useMemo(
    () => useInstanceControl.instances.indexOf(instanceId),
    [useInstanceControl.instances, instanceId]
  );

  useEffect(() => {
    return () => {
      useInstanceControl.instances = useInstanceControl.instances.filter(
        (id) => id != instanceId
      );
    };
  }, []);

  return {
    instanceIndex,
    get totalInstances() {
      return useInstanceControl.instances.length;
    },
  };
}

export default useInstanceControl;
