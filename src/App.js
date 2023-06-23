import './scss/App.scss';
import Head from './components/Head';
import Page from './components/Page';
import Home2 from './components/Home2';
import Footer from './components/Footer';
import Copyright from './components/Copyright';


function App({child}) {
  return (
    <div className="App">
    <Head/>
    <Page/>
    <Home2/>
    <Footer/>
    <Copyright/>
    {child}

    </div>
  );
}

export default App;
