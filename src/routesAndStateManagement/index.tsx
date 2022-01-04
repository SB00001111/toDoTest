import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';

import ToDoPage from '../pages/ToDoPage';
import DonePage from '../pages/DonePage';

export default function AppRoutes() {
  const location = useLocation();

  const [toDos, setToDos] = useState<any>([]);
  const [doneToDos, setDoneToDos] = useState<any>([]);

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    const storedDoneToDos = JSON.parse(
      localStorage.getItem('doneToDos') || '[]'
    );

    storedToDos && setToDos([...storedToDos]);
    storedDoneToDos && setDoneToDos([...storedDoneToDos]);
  }, []);

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <ToDoPage
              toDos={toDos}
              doneToDos={doneToDos}
              setToDos={setToDos}
              setDoneToDos={setDoneToDos}
            />
          }
        />
        <Route
          path="/done"
          element={
            <DonePage
              toDos={toDos}
              doneToDos={doneToDos}
              setToDos={setToDos}
              setDoneToDos={setDoneToDos}
            />
          }
        />
      </Routes>
    </>
  );
}
