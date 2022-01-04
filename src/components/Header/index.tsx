import { Button } from '@material-ui/core';
import { styles } from './styles';

import AddToDo from '../AddToDo';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type HeaderProps = {
  toDos: { id: string; toDo: string }[];
  setToDos: Function;
};

export default function Header({ toDos, setToDos }: HeaderProps) {
  const classes = styles();
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div style={{ display: 'flex', gap: 30 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button
            className={classes.pageBtn}
            style={{
              color: location.pathname === '/' ? '#000a21' : 'rgba(0,0,0,.5)',
            }}
          >
            to do
          </Button>
        </Link>
        <Link to="/done" style={{ textDecoration: 'none' }}>
          <Button
            className={classes.pageBtn}
            style={{
              color: location.pathname !== '/' ? '#000a21' : 'rgba(0,0,0,.5)',
            }}
          >
            done
          </Button>
        </Link>
      </div>
      <div>
        <AddToDo setToDos={setToDos} toDos={toDos} />
      </div>
    </div>
  );
}
