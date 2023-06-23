import './scss/App.scss';
import Head from './components/Head';
import Page from './components/Page';
import Services from './components/Services';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import KeyFeature from './components/KeyFeature';
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom';


function App({child}) {
  return (
    <div className="App">
    {/* <Head/>
    <KeyFeature/>
    <Page/>
    <Services/>
    <Footer/>
    <Copyright/>
    {child} */}

    </div>
  );
}

export default App;
