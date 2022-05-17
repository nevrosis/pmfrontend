import './App.css';
import Layout from './Pages/Layout'
import Home from './Pages/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Test from './Pages/_TEST';
import About from './Pages/About';
import Board from './Pages/Board';
// import ListProjectsByCompany from './Pages/ListProjectsByCompany';

function App() {
  //const navigate = useNavigate();
  // navigate('/');//TO FORCE GOING BACK TO A ROUTE

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='board' element={<Board />} />
        {/* <Route path='project' element={<ListProject />} /> */}
        <Route path='test' element={<Test />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
