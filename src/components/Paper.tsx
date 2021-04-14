interface PaperProps {
  paper: { id: string; question: string; body: string };
}

export const Paper = (props: PaperProps) => {
  return (
    <div id={props.paper.id} className="bg-white p-12 mt-4 max-w-3xl">
      <h2 className="text-gray-700 text-lg font-medium">
        {props.paper.question || `Empty question...`}
      </h2>
      <p className="text-gray-700 text-base mt-3 ">
        {props.paper.body.split('\n').map(p => (
          <p>{p}</p>
        ))}
      </p>
    </div>
  );
};
