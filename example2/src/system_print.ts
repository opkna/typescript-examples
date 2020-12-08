import { CpuInfo } from "os";

/**
 * All the types of variables that can be printed
 */
type PrintableValue = string | number | boolean;

function printValue(name: string, value: PrintableValue) {
    console.log((name + ":").padEnd(10) + value);
}

/**
 * Print some information about a CPU
 *
 * @param cpus CPU info to be printed
 */
export function printCpu(cpus: CpuInfo) {
    printValue("Model", cpus.model);
    printValue("Speed", cpus.speed);
    console.log("");
}
