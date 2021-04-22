import Textarea from 'react-textarea-autosize';

interface QuestionEditorProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

export const QuestionEditor = (props: QuestionEditorProps) => {
  return (
    <Textarea
      placeholder={props.placeholder}
      className={`focus:outline-none w-full resize-none ${
        props.className ? props.className : ''
      }`}
      onChange={e => {
        props.setValue(e.target.value);
      }}
      value={props.value}
      spellCheck={false}
    />
  );
};
