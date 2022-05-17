import './App.css';
import Layout from './Layout'
import Home from './Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Content from './Content';
import About from './About';
import ListCompany from './pages/ListCompanies';
import ListProject from './pages/ListProjectsByCompany';

function App() {
  // console.log("rendering App");


  //const navigate = useNavigate();
  // navigate('/');//TO FORCE GOING BACK TO A ROUTE






  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route index path='company' element={<ListCompany />} />
        {/* <Route index path='project' element={<ListProject />} /> */}
        <Route path='content' element={<Content />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
