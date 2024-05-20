export const compareBothStrings = (e: string, s: string) => {
  if (!e || !s) return;

  if (e === s) {
    return true;
  }

  return false;
};
