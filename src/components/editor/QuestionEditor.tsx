interface QuestionEditorProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export const QuestionEditor = (props: QuestionEditorProps) => {
  return (
    <input
      placeholder={props.placeholder}
      className="focus:outline-none"
      onChange={e => {
        props.setValue(e.target.value);
      }}
      value={props.value}
      spellCheck={false}
    />
  );
};
