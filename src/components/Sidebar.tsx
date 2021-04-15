import { usePaper } from '../hooks/usePaper';
import { OverallBand } from './Band';
import { IssueCard } from './IssueCard';

interface StatsProps {
  data?: any;
}

const issues = [
  {
    offset: 241,
    length: 8,
    message:
      'The pronoun ‘I’ must be used with a non-third-person form of a verb: “support”',
    shortMessage: 'Some short message',
    affects: 'Grammatical Range and Accuracy',
    isInline: true
  },
  {
    affects: 'Task Achievement',
    message: 'You are required to write a conclusion in this type of essay.',
    shortMessage: 'Missing conclusion',
    isInline: false
  },
  {
    affects: 'Task Achievement',
    message: 'You need to write at least 250 words',
    shortMessage: 'Word count',
    isInline: false
  },
  {
    message:
      "Generally it's recommended to use 4 to 5 paragraphs in your essay",
    shortMessage: 'Paragraph count',
    isInline: false,
    affects: 'Coherence and Cohesion'
  }
];

export const Sidebar = (props: StatsProps) => {
  const { bands } = usePaper();

  return (
    <div>
      <OverallBand score={bands.overall} />
      {issues.map(i => (
        <IssueCard issue={i} id={i.shortMessage} />
      ))}
    </div>
  );
};
