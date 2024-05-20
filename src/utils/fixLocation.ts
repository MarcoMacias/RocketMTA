export function formatLocation(
  city: string,
  state: string,
  country: string
): string {
  // initialize an empty array to store the valid arguments
  let validArgs: string[] = [];

  // add the valid arguments to the array
  if (city) validArgs.push(city);
  if (state) validArgs.push(state);
  if (country) validArgs.push(country);

  // return the valid arguments as a comma-separated string
  return validArgs.join(", ");
}
