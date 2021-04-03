import React, { useState } from 'react';
import Editor from '../components/editor/Editor';
import { PaperContextProvider } from '../components/editor/PaperContext';
import Footer from '../components/Footer';

export function Home() {
  const [state, setstate] = useState('<b>Hello <i>World</i></b>');
  return (
    <>
      <div className="flex flex-col bg-white w-full">
        <div className="w-full max-w-6xl mx-auto p-16 ">
          <PaperContextProvider>
            <Editor />
          </PaperContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
