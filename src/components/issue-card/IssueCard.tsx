import { Issue } from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { CriteriaLabel } from './CriteriaLabel';
import { LearnMoreButton } from './LearnMoreButton';
import { Replacement } from './Replacement';

interface IssueCardProps {
  issue: Issue;
}

export const IssueCard = (props: IssueCardProps) => {
  const { select, selected } = useAssistantStore();
  const expanded = selected === props.issue.id;
  const setExpanded = () => select(props.issue.id);

  return (
    <li
      key={props.issue.id}
      className={`px-12 py-8 border border-gray-100 bg-white transition-shadow ${
        expanded ? 'expanded-shadow' : 'collapsed-shadow cursor-pointer'
      } rounded-xl`}
      onClick={setExpanded}
    >
      <CriteriaLabel type={props.issue.affects} />
      <div className="mt-4 space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-800">
          {props.issue.shortMessage}
        </h3>
        <p
          className={`w-96 text-base leading-7 font-normal text-gray-700 ${
            expanded ? '' : 'line-clamp-1'
          }`}
        >
          {props.issue.message}
        </p>
      </div>
      {props.issue.isInline && props.issue.replacements && expanded && (
        <ul className="flex space-x-2 mt-4">
          {props.issue.replacements.map(r => (
            <Replacement value={r} type={props.issue.affects} />
          ))}
        </ul>
      )}
      {props.issue.link && expanded && (
        <LearnMoreButton href={props.issue.link} />
      )}
      <style jsx>{`
        .expanded-shadow {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px;
        }

        .collapsed-shadow {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
        }
      `}</style>
    </li>
  );
};
