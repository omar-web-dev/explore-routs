import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Home from './Componets/Home/Home';
import Main from './Componets/Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path : '/', 
    element : <Main />, 
    children : [
      {path : '/', element : <Home /> },
      {path : 'home', element : <Home /> },
      {path : 'about', element : <About /> }
    ]},
    {path : 'about', element : <About /> },
    {path : '*', element : '404 Na paile kiccho korar nai' },
      // 4of4 sobar last a thakbe
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Header /> */}
    </div>
  );
}

export default App;
