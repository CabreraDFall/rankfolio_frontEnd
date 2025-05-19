import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Nav from './compontents/nav/Nav';
import { UserProvider } from './context/UserContext';
import Profile from './compontents/profile/Profile';
import Group from './page/group/Group';

function App() {
  
  return (
    <UserProvider>
      <Nav/>

      <Routes>
        <Route path="/" element={<Group/>} />
        <Route path="/about" element={<h1>Acerca de</h1>} />
        <Route path="/contact" element={<h1>Contacto</h1>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserProvider>
  )
}

export default App
