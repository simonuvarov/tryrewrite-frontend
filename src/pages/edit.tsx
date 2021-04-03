import React, { useState } from 'react';
import Editor from '../components/editor/Editor';
import { PaperContextProvider } from '../contexts/PaperContext';
import Footer from '../components/Footer';
import { Stats } from '../components/Stats';

export function Home() {
  const [state, setstate] = useState('<b>Hello <i>World</i></b>');
  return (
    <>
      <div className="flex flex-col bg-white w-full">
        <div className="w-full max-w-6xl mx-auto p-16 ">
          <PaperContextProvider>
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-2">
                <Editor />
              </div>
              <Stats />
            </div>
          </PaperContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
