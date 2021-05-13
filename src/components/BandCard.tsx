interface BandCardProps {
  className?: string;
  band?: number;
}

export const BandCard = (props: BandCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center py-6">
      <span className="text-xl text-medium text-gray-500">Overall</span>
      <span className="font-bold text-gray-600 text-7xl">
        {props.band ? parseFloat(props.band.toString()).toFixed(1) : '...'}
      </span>
    </div>
  );
};
