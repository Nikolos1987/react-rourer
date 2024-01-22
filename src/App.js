import './App.css';
import { Header } from './pages/header';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Details } from './pages/details';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/:id' element={<Main />}>
          <Route path=':id' element={<Details />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
