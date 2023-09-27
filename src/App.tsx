import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Mainrouter } from './Router/Mainrouter';

function App() {
  return (
    <div>
      <RouterProvider router = {Mainrouter} />
    </div>
  );
}

export default App;
