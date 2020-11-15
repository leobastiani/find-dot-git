const create = require("zustand");

const useStore = create((set) => ({
  paused: false,
}));
