import { useContext } from 'react';
import { PaperContext } from '../contexts/PaperContext';

export const usePaper = () => {
  return useContext(PaperContext);
};
