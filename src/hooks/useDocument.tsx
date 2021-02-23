import { useEffect, useState } from 'react';
import Document from '../types/Document';
import useDebounce from './useDebounce';
import useLocalStorage from './useLocalStorage';

function useDocument() {
  const [savedDocument, storeDocument] = useLocalStorage<Document>('document', {
    question: '',
    text: ''
  });

  const [saving, setSaving] = useState(false);

  const [document, setDocument] = useState<Document>(savedDocument);

  const debouncedDocument = useDebounce(document);

  const setQuestion = (question: string): void => {
    setDocument({ ...document, question });
  };

  const setText = (text: string): void => {
    setDocument({ ...document, text });
  };

  useEffect(() => {
    setSaving(true);
    storeDocument(debouncedDocument);
    setSaving(false);
  }, [debouncedDocument]);

  return { document, setQuestion, setText, saving };
}

export default useDocument;
