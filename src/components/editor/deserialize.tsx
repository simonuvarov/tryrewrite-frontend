// Define a deserializing function that takes a string and returns a value.
export const deserialize = (string: string) => {
  // Return a value array of children derived by splitting the string.
  return string.split('\n').map(line => {
    return {
      type: 'paragraph',
      children: [{ text: line }]
    };
  });
};
