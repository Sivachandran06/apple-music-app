import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/layout';
import Home from './Pages/home';
import AlbumDetail1 from './Components/AlbumDetail1';
import AlbumDetail2 from './Components/AlbumDetail2';
import Allcard from './Components/Allcard';
import Login from './Pages/login';
import MyFav from './Components/MyFav';
import Browse from './Pages/browse';
import Radio from './Pages/radio';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="browse" element={<Browse />}></Route>
            <Route path="radio" element={<Radio />}></Route>
            <Route path="AlbumDetail1" element={<AlbumDetail1 />}></Route>
            <Route path="AlbumDetail2" element={<AlbumDetail2 />}></Route>
            <Route exact path="Allcard" element={<Allcard />}></Route>
            <Route exact path="MyFav" Component={MyFav}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
