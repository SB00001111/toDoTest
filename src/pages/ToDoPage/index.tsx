import { useState } from 'react';

import { Grid } from '@material-ui/core';
import { styles } from './styles';

import ToDoCard from '../../components/ToDoCard';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import NoToDosDisclaimer from '../../components/NoToDosDisclaimer';

type ToDoPageProps = {
  toDos: { id: string; toDo: string }[];
  doneToDos: { id: string; toDo: string }[];
  setToDos: Function;
  setDoneToDos: Function;
};

export default function ToDoPage({
  toDos,
  doneToDos,
  setToDos,
  setDoneToDos,
}: ToDoPageProps) {
  const classes = styles();
  const [page, setPage] = useState<number>(0);

  const content =
    toDos.length > 0 ? (
      <Grid container spacing={3}>
        {toDos.slice(page, page + 6).map((toDo, i) => (
          <ToDoCard
            key={i}
            toDos={toDos}
            doneToDos={doneToDos}
            id={toDo.id}
            toDo={toDo.toDo}
            setToDos={setToDos}
            setDoneToDos={setDoneToDos}
            isToDo
          />
        ))}
      </Grid>
    ) : (
      <NoToDosDisclaimer message="No To Does Yet!" />
    );

  return (
    <div className={classes.centerContainer}>
      <div className={classes.container}>
        <Header toDos={toDos} setToDos={setToDos} />
        {content}
        <Pagination page={page} setPage={setPage} arrayLength={toDos.length} />
      </div>
    </div>
  );
}
