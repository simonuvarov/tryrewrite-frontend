import React, { createContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import paperService, { Paper } from '../services/paper.service';

interface PaperContextProps {
  papers?: Array<Paper>;
  error?: any;
  deletePaper: (paperId: string) => void;
}

export const PaperContext = createContext<PaperContextProps>(
  {} as PaperContextProps
);

export const PaperProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();
  const { data: papers, error } = useQuery('papers', paperService.getAllPapers);

  const deleteMutation = useMutation(paperService.deletePaper, {
    onMutate: async (paperId: string) => {
      await queryClient.cancelQueries();
      const previosPapers = queryClient.getQueryData('papers');
      queryClient.setQueryData<Paper[] | undefined>('papers', old => {
        if (old) return old.filter(paper => paper.id !== paperId);
      });
    }
  });

  const deletePaper = (paperId: string) => {
    deleteMutation.mutate(paperId);
  };

  return (
    <PaperContext.Provider value={{ papers, error, deletePaper }}>
      {children}
    </PaperContext.Provider>
  );
};
