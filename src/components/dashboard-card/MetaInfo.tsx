import { Datetime } from './Datetime'

interface MetaInfoProps {
  createdAt: Date
  updatedAt: Date
}
export function MetaInfo(props: MetaInfoProps) {
  return (
    <article className="text-sm font-medium leading-4 text-gray-400">
      Updated <Datetime datetime={props.updatedAt} />
      <span className="mx-1">{'•'}</span>
      Created <Datetime datetime={props.createdAt} />
    </article>
  )
}
