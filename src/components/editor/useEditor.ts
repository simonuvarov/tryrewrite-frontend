import { useContext } from 'react';
import { PaperContext } from './PaperContext';

export const usePaper = () => {
  const { body, setBody } = useContext(PaperContext);

  return { body, setBody };
};
