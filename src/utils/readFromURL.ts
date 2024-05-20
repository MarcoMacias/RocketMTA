export default async function readFile(file: Blob): Promise<string> {
  // Create a new FileReader instance
  const reader = new FileReader();

  // Return a new promise that resolves with the file's base64 encoding
  return new Promise((resolve, reject) => {
    // When the file has been read...
    reader.onloadend = () => {
      // Resolve the promise with the file's base64 encoding
      resolve(reader.result as string);
    };

    // If there was an error reading the file, reject the promise
    reader.onerror = reject;

    // Start reading the file as a base64 string
    reader.readAsDataURL(file);
  });
}
