/** @format */

import { micromark } from "micromark";
import { existsSync } from "fs";

const FILE = "../../assets/arduino_D1R2_in_arch.md";
function convert_mdTOhtml() {
  if (!existsSync(FILE)) {
    console.log("File not found");
  }
}

// const returnedHTMLFile = micromark(FILE);

export { convert_mdTOhtml };
