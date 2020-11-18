import path from "path";
import { docopt } from "docopt";

const args = docopt(
  `
Usage:
  find-dot-git [<paths>...] [options]

Options:
  -h --help   Show this screen.
  -d --debug  Debug mode.
`.trim()
);

if (args["<paths>"].length === 0) {
  args["<paths>"] = [path.resolve("/")];
}

args["<paths>"] = [...new Set(args["<paths>"])];

export default args;
