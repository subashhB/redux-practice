import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Shop/>
      </div>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
