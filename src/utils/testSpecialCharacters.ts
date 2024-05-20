export const testSpecialCharacters = (e: string) => {
  if (!e) return;

  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (regex.test(e)) {
    return true;
  }

  return false;
};
