import moment from 'moment'

export const Datetime = ({ datetime }: { datetime: Date }) => {
  return (
    <time dateTime={moment(datetime).toString()}>
      {moment(datetime).fromNow()}
    </time>
  )
}
