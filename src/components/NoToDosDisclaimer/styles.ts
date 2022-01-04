import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
  },
  typography: { color: 'white', fontSize: 21, fontWeight: 'bold' },
}));
