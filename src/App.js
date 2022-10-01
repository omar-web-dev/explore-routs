import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path : '/', element : <div>This is a Main Paig</div> },
    {path : 'home', element : <Home /> },
    {path : 'about', element : <About /> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Header /> */}
    </div>
  );
}

export default App;
