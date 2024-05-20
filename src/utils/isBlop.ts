export default function isBlop(value: any): boolean {
  return typeof value === "string" && value.startsWith("Blop");
}
