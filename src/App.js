import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    <>
    {/* <h1 className='text-brandprimary'>Hellow WOrld</h1> */}
    <Nav/>
    <Home/>
    <Services/>
    </>
  );
}

export default App;
