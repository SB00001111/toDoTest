import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: 10,
    },
  },
  pages: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: '14px',
    color: '#000a21',
  },
  btn: {
    width: 116,
    height: 30,
    backgroundColor: '#000a21',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: 10,
    lineHeight: '11px',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    '&:hover': { backgroundColor: '#404040' },
  },
}));
