import './scss/App.scss';

import Home, {loader as HomeLoader} from './pages/Home'
import AboutUs from './pages/AboutUs'
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

 const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>} loader={HomeLoader}/>
    <Route path='/about' element={<AboutUs/>}/>

  </Route>
 ))


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>   
   

    </div>
  );
}

export default App;
