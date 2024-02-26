import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllQuests from './components/quest/AllQuests';
import Navbar from './components/navbar/Navbar';
import MyQuestPage from './components/guild/MyQuestsPage';
import QuestDetail from './components/quest/QuestDetail';
import LoginFormParty from './components/login/LoginFormParty';
import LoginFormGuild from './components/login/LoginFormGuild';
import "bootstrap/dist/css/bootstrap.css";

export const client = atom({});
export const party = atom({});

function App() {
  const [clientState, setClientState] = useAtom(client);
  const [partyState, setPartyState] = useAtom(party);

  useEffect(() => {
    const storedClientState = localStorage.getItem('clientState');
    if (storedClientState) {
      setClientState(JSON.parse(storedClientState));
    }
    const storedPartyState = localStorage.getItem('partyState');
    if (storedPartyState) {
      setPartyState(JSON.parse(storedPartyState));
    }
  }, [setClientState, setPartyState]);

  useEffect(() => {
    // Aggiunto controllo per non salvare oggetti vuoti
    if (Object.keys(clientState).length > 0) {
      localStorage.setItem('clientState', JSON.stringify(clientState));
    }
    if (Object.keys(partyState).length > 0) {
      localStorage.setItem('partyState', JSON.stringify(partyState));
    }
  }, [clientState, partyState]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<AllQuests/>}></Route>
        <Route path='/loginguild' element={<LoginFormGuild/>}></Route>
        <Route path='/loginparty' element={<LoginFormParty/>}></Route>
        <Route path='/myquests/byguild/:id' element={<MyQuestPage/>}></Route>
        <Route path='/quests/:id' element={<QuestDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
