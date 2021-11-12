import useEditor from '../hooks/useEditor'

export const BandScore = ({ className }: { className?: string }) => {
  const { band } = useEditor()

  if (!band) return null

  const formattedBand = parseFloat(band.toString()).toFixed(1)

  return (
    <div className={`text-sm font-semibold text-gray-500 ${className}`}>
      {formattedBand} <span className="text-gray-400">band</span>
    </div>
  )
}
