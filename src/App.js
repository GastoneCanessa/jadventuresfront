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
import QuestDetail from './components/quest/QuestDetail';

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path=''element={<AllQuests/>}></Route>
          <Route path='/loginform'element={<LoginForm/>}></Route>
          <Route path='/myquest'element={<MyQuestPage/>}></Route>
          <Route path='/questdetail/:id' element={< QuestDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
