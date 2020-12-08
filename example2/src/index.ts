import * as os from "os";
import { printCpu } from "./system_print";

// Get info for all CPU's
const cpus = os.cpus();

// Loop over all CPU's
for (let i = 0; i < cpus.length; i++) {
    console.log("CPU " + (i + 1));
    printCpu(cpus[i]);
}
