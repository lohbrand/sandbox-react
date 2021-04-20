import SampleData from "./sample-data.json";

export function DataService(incomeData, type) {
  if (typeof incomeData === "undefined") {
    return SampleData;
  }
}
