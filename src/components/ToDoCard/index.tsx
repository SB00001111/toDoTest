import { Button, Grid, Typography } from '@material-ui/core';
import { styles } from './styles';

type ToDoCardProps = {
  toDos: { id: string; toDo: string }[];
  doneToDos: { id: string; toDo: string }[];
  toDo: string;
  id: string;
  isToDo: boolean;
  setToDos: Function;
  setDoneToDos: Function;
};

export default function ToDoCard({
  toDos,
  doneToDos,
  toDo,
  id,
  isToDo,
  setToDos,
  setDoneToDos,
}: ToDoCardProps) {
  const classes = styles();

  const doneBtn = (
    <Button
      className={classes.doneBtn}
      onClick={() => {
        setToDos((prevState: { id: string; toDo: string }[]) =>
          prevState.filter((toDo) => toDo.id !== id)
        );
        localStorage.setItem(
          'toDos',
          JSON.stringify([...toDos.filter((toDo) => toDo.id !== id)])
        );

        setDoneToDos((prevState: { id: string; toDo: string }[]) => [
          ...prevState,
          { id: id, toDo: toDo },
        ]);
        localStorage.setItem(
          'doneToDos',
          JSON.stringify([...doneToDos, { id: id, toDo: toDo }])
        );
      }}
    >
      done
    </Button>
  );

  const deleteBtn = (
    <Button
      className={classes.deleteBtn}
      onClick={() => {
        setToDos((prevState: { id: string; toDo: string }[]) =>
          prevState.filter((toDo) => toDo.id !== id)
        );
        localStorage.setItem(
          'toDos',
          JSON.stringify([...toDos.filter((toDo) => toDo.id !== id)])
        );

        setDoneToDos((prevState: { id: string; toDo: string }[]) =>
          prevState.filter((toDo) => toDo.id !== id)
        );
        localStorage.setItem(
          'doneToDos',
          JSON.stringify([...doneToDos.filter((toDo) => toDo.id !== id)])
        );
      }}
    >
      delete
    </Button>
  );

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <div className={classes.card}>
        <Typography
          className={classes.taskTypography}
          style={{ textDecoration: isToDo ? 'none' : 'line-through' }}
        >
          {toDo}
        </Typography>
        <div className={classes.btnContainer}>
          {deleteBtn}
          {isToDo && doneBtn}
        </div>
      </div>
    </Grid>
  );
}
