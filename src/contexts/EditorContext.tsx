import { createContext, ReactNode, useEffect, useState } from 'react'
import { Descendant, Node } from 'slate'
import paperService, { Issue } from '../services/paper.service'

interface EditorContextProps {
  initializingPaper: boolean
  issues?: Array<Issue>
  error?: any
  question: Descendant[]
  setQuestion: (q: Descendant[]) => void
  body: Descendant[]
  setBody: (b: Descendant[]) => void
  checking: boolean
  selected?: string
  select: (id: string) => void
  replaceText: (offset: number, length: number, replacement: string) => void
  band?: number
  wordCount?: number
}

export const EditorContext = createContext<EditorContextProps>(
  {} as EditorContextProps
)

export const EditorProvider = ({
  children,
  paperId
}: {
  children: ReactNode
  paperId?: string
}): JSX.Element => {
  const [initializingPaper, setInitializingPaper] = useState(true)
  const [error, setError] = useState<any>()
  const [checking, setChecking] = useState(true)
  const [issues, setIssues] = useState<Array<Issue>>()
  const [question, setQuestion] = useState<Descendant[]>(stringToSlate('\n'))
  const [body, setBody] = useState<Descendant[]>(stringToSlate('\n'))
  const [band, setBand] = useState<number>()
  const [wordCount, setWordCount] = useState<number>()

  const [selected, setSelected] = useState<string>()

  const replaceText = (offset: number, length: number, replacement: string) => {
    const text = slateToString(body)
    const newText =
      text.substring(0, offset) +
      replacement +
      text.substring(offset + length, text.length)

    setBody(stringToSlate(newText))
  }

  // initalize paper
  useEffect(() => {
    console.log('initializing paper')
    if (paperId)
      paperService
        .getPaper(paperId)
        .then((res) => {
          setQuestion(stringToSlate(res.question))
          setBody(stringToSlate(res.body))
          setBand(res.overallBand)
          setInitializingPaper(false)
        })
        .catch((err) => setError(err))
  }, [])

  // start checking paper only after initialization
  useEffect(() => {
    setChecking(true)

    if (initializingPaper) return // check question and body are not undefined to make typescript happy
    const handler = setTimeout(() => {
      paperService
        .gradePaper(paperId, {
          question: slateToString(question),
          body: slateToString(body)
        })
        .then((res) => {
          setIssues(res.issues)
          setBand(res.bands.overall)
        })
        .catch((err) => setError(err))
        .finally(() => setChecking(false))
    }, 500)
    // clear timeout when value changes, on unmount, etc.
    return () => clearTimeout(handler)
  }, [initializingPaper, question, body])

  useEffect(() => {
    const text = slateToString(body)
    if (text.length === 0) {
      setWordCount(0)
      return
    }
    const regex = /\s+/gi
    const wc = text.trim().split(regex).length
    setWordCount(wc)
  }, [body])

  const value = {
    initializingPaper,
    error,
    issues,
    question,
    setQuestion,
    body,
    setBody,
    checking,
    selected,
    select: setSelected,
    replaceText,
    band,
    wordCount
  }

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  )
}

// Define a serializing function that takes a value and returns a string.
export const slateToString = (value: any): string => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n: any) => Node.string(n))
      // Join them all with line breaks denoting paragraphs.
      .join('\n')
  )
}

// Define a deserializing function that takes a string and returns a value.
export const stringToSlate = (string: string): Descendant[] => {
  // Return a value array of children derived by splitting the string.
  return string.split('\n').map((line) => {
    return {
      type: 'paragraph',
      children: [{ text: line }]
    }
  })
}
