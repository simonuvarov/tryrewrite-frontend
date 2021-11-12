export const Question = ({
  text,
  className
}: {
  text: string
  className?: string
}) => {
  const styles = [
    'font-medium',
    'text-base',
    'leading-6',
    'truncate',
    'text-gray-800'
  ]
  if (className) styles.push(className)
  const isEmpty = text.length === 0

  return (
    <header className={styles.join(' ')}>
      {isEmpty ? 'Empty question' : text}
    </header>
  )
}
