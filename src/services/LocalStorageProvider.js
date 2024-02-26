import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { client, party } from '../App';
// Assicurati che i percorsi siano corretti

const LocalStorageProvider = ({ children }) => {
  const [clientState, setClientState] = useAtom(client);
  const [partyState, setPartyState] = useAtom(party);

  // Effetto per sincronizzare lo stato del client con il localStorage
  useEffect(() => {
    const storedClientState = localStorage.getItem('clientState');
    if (storedClientState) {
      setClientState(JSON.parse(storedClientState));
    }
  }, [setClientState]);

  useEffect(() => {
    localStorage.setItem('clientState', JSON.stringify(clientState));
  }, [clientState]);

  // Effetto per sincronizzare lo stato della party con il localStorage
  useEffect(() => {
    const storedPartyState = localStorage.getItem('partyState');
    if (storedPartyState) {
      setPartyState(JSON.parse(storedPartyState));
    }
  }, [setPartyState]);

  useEffect(() => {
    localStorage.setItem('partyState', JSON.stringify(partyState));
  }, [partyState]);

  return <>{children}</>;
};

export default LocalStorageProvider; 