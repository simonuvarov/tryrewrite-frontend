export const Body = ({
  text,
  className
}: {
  text: string
  className?: string
}) => {
  const styles = [
    'line-clamp-3',
    'text-base',
    'leading-6',
    'font-normal',
    'text-gray-600',
    'h-[72px]'
  ]
  if (className) styles.push(className)
  return <p className={styles.join(' ')}>{text}</p>
}
