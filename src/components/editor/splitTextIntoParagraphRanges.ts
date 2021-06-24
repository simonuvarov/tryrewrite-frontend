export const splitTextIntoParagraphRanges = (text: string) => {
  const paragraphRanges: Array<[number, number]> = [];
  let offset = 0;
  text.split('\n').map((p: string) => {
    const start = offset;
    const end = offset + p.length + '\n'.length;
    paragraphRanges.push([start, end]);
    offset = offset + p.length + '\n'.length;
  });

  return paragraphRanges;
};
