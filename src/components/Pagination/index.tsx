import { Button, Typography } from '@material-ui/core';

import { styles } from './styles';

type PaginationProps = { page: number; setPage: Function; arrayLength: number };

export default function Pagination({
  page,
  setPage,
  arrayLength,
}: PaginationProps) {
  const classes = styles();

  const handleNextPage = () => {
    if (page + 6 < arrayLength) setPage((prevState: number) => prevState + 6);
  };

  const handlePreviousPage = () => {
    if (page !== 0) setPage((prevState: number) => prevState - 6);
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.pages}>
        {`${page + 1}-${arrayLength > 5 ? page + 6 : page + arrayLength}`}{' '}
        <span
          className={classes.pages}
          style={{ color: 'rgba(25, 25, 25, 0.5)' }}
        >
          out of {arrayLength}
        </span>
      </Typography>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button className={classes.btn} onClick={handlePreviousPage}>
          previous
        </Button>
        <Button className={classes.btn} onClick={handleNextPage}>
          next
        </Button>
      </div>
    </div>
  );
}
