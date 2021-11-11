import { CRITERIA_TYPE } from '../../services/paper.service'

interface ReplacementProps {
  type: CRITERIA_TYPE
  value: string
  onClick: () => void
}
export const Replacement = ({ type, value, onClick }: ReplacementProps) => {
  let colors: string

  switch (type) {
    case CRITERIA_TYPE.TA:
      colors = `bg-blue-500 text-white`
      break
    case CRITERIA_TYPE.CC:
      colors = `bg-purple-500 text-white`
      break
    case CRITERIA_TYPE.LR:
      colors = `bg-red-500 text-white`
      break
    case CRITERIA_TYPE.GR:
      colors = `bg-yellow-500 text-white`
      break
  }

  return (
    <li
      className={`lieading-6 inline cursor-pointer rounded py-2 px-3 text-base font-medium transition-shadow duration-75 hover:shadow-md ${colors}`}
      onClick={onClick}>
      {value}
    </li>
  )
}
