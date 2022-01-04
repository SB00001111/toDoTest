import { useState } from 'react';

import { Grid } from '@material-ui/core';
import { styles } from './styles';

import ToDoCard from '../../components/ToDoCard';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import NoToDosDisclaimer from '../../components/NoToDosDisclaimer';

type DonePageProps = {
  toDos: { id: string; toDo: string }[];
  doneToDos: { id: string; toDo: string }[];
  setToDos: Function;
  setDoneToDos: Function;
};

export default function DonePage({
  toDos,
  doneToDos,
  setToDos,
  setDoneToDos,
}: DonePageProps) {
  const classes = styles();
  const [page, setPage] = useState<number>(0);

  const content =
    doneToDos.length > 0 ? (
      <Grid container spacing={3}>
        {doneToDos.slice(page, page + 6).map((doneToDo, i) => (
          <ToDoCard
            key={i}
            toDos={toDos}
            doneToDos={doneToDos}
            id={doneToDo.id}
            toDo={doneToDo.toDo}
            setToDos={setToDos}
            setDoneToDos={setDoneToDos}
            isToDo={false}
          />
        ))}
      </Grid>
    ) : (
      <NoToDosDisclaimer message="No Done To Does!" />
    );

  return (
    <div className={classes.centerContainer}>
      <div className={classes.container}>
        <Header setToDos={setToDos} toDos={toDos} />
        {content}
        <Pagination
          page={page}
          setPage={setPage}
          arrayLength={doneToDos.length}
        />
      </div>
    </div>
  );
}
