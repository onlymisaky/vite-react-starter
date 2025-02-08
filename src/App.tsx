import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import viteLogo from '/vite.svg';

const logoStyle = 'h-[6em] p-[1.5em] will-change-[filter] transition-[filter] duration-300';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className={`${logoStyle} logo`} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className={`${logoStyle} logo react`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-[2em]">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
