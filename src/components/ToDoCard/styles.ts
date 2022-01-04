import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 15,
    boxShadow: '0px 4px 14px 0px rgba(0,0,0,25%)',
    transition: '0.150s ease-in',

    '&:hover': { transform: 'translateY(-5px)' },
  },
  taskTypography: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
    padding: '30px 20px',
    wordWrap: 'break-word',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 10px',
  },
  deleteBtn: {
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'capitalize',
    color: '#ff5f5f',

    '&:hover': { backgroundColor: 'transparent' },
  },
  doneBtn: {
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'capitalize',
    color: '#9bf693',

    '&:hover': { backgroundColor: 'transparent' },
  },
}));
