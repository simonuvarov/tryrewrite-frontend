import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  children: string;
}

const Markdown = (props: MarkdownProps) => {
  return <ReactMarkdown>{props.children}</ReactMarkdown>;
};

export default Markdown;
