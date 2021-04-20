interface NoScrollbarProps {
  children: React.ReactNode;
}

export const NoScrollbarContainer = ({ children }: NoScrollbarProps) => {
  return (
    <div className="w-full overflow-y-scroll no-scrollbar h-screen">
      {children}
      <style jsx>{`
        /* Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};
