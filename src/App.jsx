import { useState } from 'react'
import Routers from './Pages/Router'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routers/>
      <p className='text-black'>Hello world</p>
    </>
  )
}

export default App
// import React from 'react';
// import Dashboard from './Pages/Dashboard';

// const App = () => {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// };

// export default App;
