interface StatsProps {
  data?: any;
}

export const Stats = (props: StatsProps) => {
  if (!props.data) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Band: {props.data.band}</h1>
      <div className="mt-5">
        <h2 className="font-medium text-lg">
          Task Achivement: {props.data.ta.band}
        </h2>
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Coherence and Cohesion: {props.data.cc.band}
        </h2>
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Lexical Resource: {props.data.lr.band}
        </h2>
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Grammatical Range and Accuracy: {props.data.gr.band}
        </h2>
      </div>
      <pre>{JSON.stringify(props.data.issues, null, 2)}</pre>
    </div>
  );
};
