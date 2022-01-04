import { Typography } from '@material-ui/core';
import { styles } from './styles';

type NoToDoDisclaimerProps = { message: string };

export default function NoToDoDisclaimer({ message }: NoToDoDisclaimerProps) {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography className={classes.typography}>{message}</Typography>
    </div>
  );
}
