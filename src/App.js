import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AllQuests from './components/quest/AllQuests';
import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from './components/login/LoginForm';
import MyQuestPage from './components/guild/MyQuestsPage';
import { atom } from 'jotai';

export const client = atom({});

function App() {

  

  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path=''element={<AllQuests/>}></Route>
          <Route path='/loginform'element={<LoginForm/>}></Route>
          <Route path='/myquests'element={<MyQuestPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
