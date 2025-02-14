import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ShowTask from './components/show-task/ShowTask';
import Navbar from './components/Navbar/Navbar';
import AddTask from './components/AddTask/AddTask';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';


function App() {
  const routes = createBrowserRouter([
    {path:"/",element:<Layout />,children:[
      {index:true,element:<ShowTask/>},
      {path:"/show-task",element:<ShowTask />},
      {path:"/add-task",element:<AddTask />},
      {path:"*",element:< NotFound/>}
    ]},


  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
