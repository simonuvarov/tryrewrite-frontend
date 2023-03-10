import { useEffect, useRef } from 'react'
import scrollIntoViewIfNeeded from 'smooth-scroll-into-view-if-needed'
import useEditor from '../../hooks/useEditor'
import { InlineIssue, Issue } from '../../services/paper.service'
import { CriteriaLabel } from './CriteriaLabel'
import { LearnMoreButton } from './LearnMoreButton'
import { Replacement } from './Replacement'

interface IssueCardProps {
  issue: Issue
  expanded?: boolean
}

export const IssueCardSkeleton = () => {
  return (
    <li className="w-[384px] animate-pulse rounded-lg border border-gray-100 bg-white px-8 pt-8 pb-6 shadow">
      <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
      <div className="mt-5 space-y-3">
        <h3 className="h-6 w-1/2 rounded bg-gray-200"></h3>
        <p className="h-5 w-full rounded bg-gray-200"></p>
      </div>
      <style jsx>{`
        .expanded-shadow {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px;
        }
        .collapsed-shadow {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
        }
      `}</style>
    </li>
  )
}

export const IssueCard = (props: IssueCardProps) => {
  const { select, selected, replaceText } = useEditor()

  const ref = useRef<HTMLLIElement>(null)

  const expanded = props.expanded ? props.expanded : selected === props.issue.id
  const setExpanded = () => select(props.issue.id)

  useEffect(() => {
    if (expanded && ref.current)
      scrollIntoViewIfNeeded(ref.current, {
        scrollMode: 'if-needed',
        behavior: 'smooth',
        block: 'center'
      })
  }, [expanded])

  return (
    <li
      key={props.issue.id}
      className={`w-[384px] rounded-lg border border-gray-200 bg-white px-8 pt-8 pb-6 transition-shadow ${
        expanded ? 'shadow-lg' : 'cursor-pointer shadow-sm'
      }`}
      onClick={setExpanded}
      ref={ref}>
      <CriteriaLabel type={props.issue.affects} />
      <div className="mt-3 space-y-2">
        <h3
          className={`text-base font-medium text-gray-800 ${
            expanded ? '' : 'line-clamp-1'
          }`}>
          {props.issue.shortMessage.charAt(0).toUpperCase() +
            props.issue.shortMessage.slice(1)}
        </h3>
        <p
          className={`mt-4 text-base font-normal leading-[1.5] text-gray-600 ${
            expanded ? '' : 'line-clamp-1'
          }`}>
          {props.issue.message}
        </p>
      </div>
      {props.issue.isInline &&
        props.issue.replacements &&
        props.issue.replacements.length > 0 &&
        expanded && (
          <ul className="mt-3 flex space-x-2">
            {props.issue.replacements.map((r) => (
              <Replacement
                key={r}
                value={r}
                type={props.issue.affects}
                onClick={() => {
                  const issue: InlineIssue = props.issue as InlineIssue // for some reason TS does not perform type check correctly
                  replaceText(issue.offset, issue.length, r)
                }}
              />
            ))}
          </ul>
        )}
      {props.issue.link && expanded && (
        <LearnMoreButton href={props.issue.link} />
      )}
    </li>
  )
}
