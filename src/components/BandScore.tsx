import useEditor from '../hooks/useEditor'

export const BandScore = ({ className }: { className?: string }) => {
  const { band } = useEditor()

  if (!band) return null

  return (
    <div className={`text-sm font-semibold text-gray-500 ${className}`}>
      {parseFloat(band.toString()).toFixed(1)}{' '}
      <span className="text-gray-400">band</span>
    </div>
  )
}
