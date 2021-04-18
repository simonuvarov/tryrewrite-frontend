import Textarea from 'react-textarea-autosize';

interface QuestionEditorProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export const QuestionEditor = (props: QuestionEditorProps) => {
  return (
    <Textarea
      placeholder={props.placeholder}
      className="focus:outline-none w-full resize-none font-medium leading-7 text-gray-800"
      onChange={e => {
        props.setValue(e.target.value);
      }}
      value={props.value}
      spellCheck={false}
    />
  );
};
