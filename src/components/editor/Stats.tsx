interface StatsProps {
  data?: any;
}

export const Stats = (props: StatsProps) => {
  if (!props.data) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h2 className="font-medium text-lg">Task Achivement</h2>
        {props.data.ta.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">Coherence and Cohesion</h2>
        {props.data.cc.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">Lexical Resource</h2>
        {props.data.lr.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Grammatical Range and Accuracy
        </h2>
        {props.data.gr.map((ruleResult: any) => (
          <p className="mt-2" key={ruleResult.name}>
            {ruleResult.message} – {ruleResult.band}
          </p>
        ))}
      </div>
    </>
  );
};
