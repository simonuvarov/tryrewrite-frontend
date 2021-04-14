interface BandProps {
  score: number;
}

export const OverallBand = (props: BandProps) => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-lg text-medium text-gray-500">Overall Band:</span>
      <span className="ml-3 text-3xl font-bold text-gray-800">
        {props.score}
      </span>
    </div>
  );
};
