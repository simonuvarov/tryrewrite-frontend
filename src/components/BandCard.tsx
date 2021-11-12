interface BandCardProps {
  className?: string
  band?: number
}

export const BandCard = (props: BandCardProps) => {
  const formattedBand = props.band
    ? parseFloat(props.band.toString()).toFixed(1)
    : '...'

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <span className="text-xl font-medium text-gray-500">Overall</span>
      <span className="text-7xl font-bold text-gray-600">{formattedBand}</span>
    </div>
  )
}
