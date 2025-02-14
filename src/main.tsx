import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootEl);

function setup(root: ReactDOM.Root, App: React.ComponentType, strictMode: boolean) {
  const Component = strictMode ? React.StrictMode : React.Fragment;
  root.render(
    <Component>
      <App />
    </Component>,
  );
}

setup(root, App, true);
