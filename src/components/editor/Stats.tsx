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
        {props.data.ta.results.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Coherence and Cohesion: {props.data.cc.band}
        </h2>
        {props.data.cc.results.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Lexical Resource: {props.data.lr.band}
        </h2>
        {props.data.lr.results.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Grammatical Range and Accuracy: {props.data.gr.band}
        </h2>
        {props.data.gr.results.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
    </div>
  );
};
