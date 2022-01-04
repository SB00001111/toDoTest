import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 60,
    marginBottom: 40,

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  pageBtn: {
    fontWeight: 'bold',
    fontSize: '33px',
    lineHeight: '39px',
    textTransform: 'capitalize',
  },
}));
