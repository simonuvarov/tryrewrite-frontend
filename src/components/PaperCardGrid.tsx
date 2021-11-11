import { useRouter } from 'next/dist/client/router'
import usePapers from '../hooks/usePapers'
import paperService, { Paper } from '../services/paper.service'
import { Button } from './Button'
import { PaperCard } from './PaperCard'

const PaperCardSkeleton = () => {
  return (
    <li className="flex animate-pulse items-center justify-between">
      <div className="flex w-full max-w-lg shrink-0 flex-col space-y-2 py-4 px-2">
        <div className="h-5 w-2/3 rounded bg-gray-100" />
        <div className="h-5 w-full rounded bg-gray-100 " />
      </div>
      <div className="h-5 w-0.5 rounded bg-gray-100 px-4" />
    </li>
  )
}

interface PaperCardGridProps {
  className?: string
}

export const PaperCardGrid = ({ className }: PaperCardGridProps) => {
  const { papers } = usePapers()
  const router = useRouter()

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then((res) => router.push(`/paper/${res.data.id}`))
  }

  const skeletons = new Array(4).fill(null).map((_, i) => {
    return <PaperCardSkeleton key={i} />
  })

  if (!papers) return null

  if (papers && papers.length === 0)
    return (
      <ul className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-xl font-medium text-gray-700">
          You don't have any papers, yet.
        </h1>
        <Button
          onClick={handleNewPaperClick}
          type="white"
          className="mt-4"
          size="md">
          Write something
        </Button>
      </ul>
    )

  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ${
        className || ''
      }`}>
      {papers
        ? papers.map((paper: Paper) => (
            <PaperCard paper={paper} key={paper.id} />
          ))
        : skeletons}
    </div>
  )
}
