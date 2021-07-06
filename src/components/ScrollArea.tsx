import React, { useRef } from 'react';
import { EditorScrollContext } from '../contexts/EditorScrollContext';

export const ScrollArea = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <EditorScrollContext.Provider value={{ scrollTo }}>
      <div className={className} ref={containerRef} id="test">
        {children}
      </div>
    </EditorScrollContext.Provider>
  );
};
