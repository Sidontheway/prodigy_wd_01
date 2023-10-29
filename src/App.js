import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    // <><Header /><div className='bg-indigo-600 w-full h-s'> </div></>
    <div>
      <Header/>
      <div className='bg-indigo-600 w-full h-screen'></div>
    </div>
  );
}

export default App;
