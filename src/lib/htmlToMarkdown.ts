import parse from 'rehype-parse';
import rehype2remark from 'rehype-remark';
import stringify from 'remark-stringify';
import unified from 'unified';

export default function htmlToMarkdown(html: string): string {
  return unified()
    .use(parse)
    .use(rehype2remark)
    .use(stringify)
    .processSync(html)
    .toString();
}
