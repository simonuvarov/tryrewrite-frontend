import React from 'react'
import useEditor from '../hooks/useEditor'
import { IssueCard, IssueCardSkeleton } from './issue-card/IssueCard'

interface IssueListProps {
  className?: string
}

export const IssueList = (props: IssueListProps) => {
  const { issues, checking } = useEditor()

  const skeletons = new Array(10).fill(null).map((_, i) => {
    return <IssueCardSkeleton key={i} />
  })

  const containerRef = React.useRef<HTMLUListElement>(null)

  const inlineIssues = issues?.filter((issue) => issue.isInline)
  const generalIssues = issues?.filter((issue) => !issue.isInline)

  if (checking || !inlineIssues || !generalIssues)
    return (
      <ul className={`space-y-8 ${props.className || ''}`} ref={containerRef}>
        {skeletons}
      </ul>
    )

  return (
    <ul className={`space-y-8 ${props.className || ''}`} ref={containerRef}>
      {inlineIssues.map((issue) => (
        <IssueCard issue={issue} key={issue.id} />
      ))}
      {generalIssues.map((issue) => (
        <IssueCard issue={issue} key={issue.id} />
      ))}
    </ul>
  )
}
