import './App.css';
import {Header} from './components/Header/Header'
import { Home } from './components/Header/Home/Home';
import imgHome from './images/nadie.jpg';
import { Routes, Route } from "react-router-dom";
import { Form } from './components/Form/Form';
import { UserList } from './components/UsersList/UsersList';
import {UserProvider} from './context/UserContext';
function App() {
  return (
    <>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home img={imgHome}/>} />
          <Route path="/form" element={<Form title="Create a New User"  buttoncontent="Create a New User"/>} /> 
          <Route path="/users" element={<UserList/>} />
          </Routes>
      </UserProvider>
    </>
  );
}

export default App;