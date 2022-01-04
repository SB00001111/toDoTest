import { AddBox } from '@material-ui/icons';
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';

type AddToDoProps = {
  toDos: { id: string; toDo: string }[];
  setToDos: Function;
};

export default function AddToDo({ toDos, setToDos }: AddToDoProps) {
  const [toDo, setToDo] = useState<string>('');

  return (
    <Search>
      <SearchIconWrapper>
        <AddBox
          style={{
            position: 'absolute',
            left: 0,
            color: '#9bf693',
            zIndex: 30,
            marginLeft: 10,
          }}
        />
      </SearchIconWrapper>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setToDos((prevState: string[]) => [
            ...prevState,
            { id: uuidv4().toString(), toDo },
          ]);

          setToDo('');
          localStorage.setItem(
            'toDos',
            JSON.stringify([...toDos, { id: uuidv4().toString(), toDo }])
          );
        }}
      >
        <StyledInputBase
          onChange={(event) => setToDo(event.target.value)}
          placeholder="Add a to do..."
          inputProps={{ 'aria-label': 'search' }}
          value={toDo}
        />
      </form>
    </Search>
  );
}
