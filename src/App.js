import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import Error from './Components/Home/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/movie/:id' element= {<Movie/>}/>
          <Route path='*' element= {<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
