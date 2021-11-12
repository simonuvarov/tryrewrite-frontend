export const BandLabel = ({
  score,
  className
}: {
  score: number
  className?: string
}) => {
  const styles = [
    'text-xs',
    'uppercase',
    'inline-block',
    'font-medium',
    'px-2',
    'py-1',
    'rounded'
  ]

  if (className) styles.push(className)

  styles.push('bg-gray-100', 'text-gray-700')
  return (
    <div className={styles.join(' ')}>
      Band {parseFloat(score.toString()).toFixed(1)}
    </div>
  )
}
