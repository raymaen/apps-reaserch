import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import { round } from 'mathjs';
import GameDetailsDialog from './GameDetailsDialog';
import { fakeData, GameAllDataKeys } from '../../service/types';

const columns = [
  { id: 'index', label: 'Index', minWidth: 60 },
  { id: 'headerImage', label: 'Avatar', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 100 },
  { id: 'score', label: 'Ratings', minWidth: 100 },
  { id: 'minInstalls', label: 'Installs', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 }
];

const createData = data =>
  data.map(dataRow => {
    GameAllDataKeys.forEach(key => (dataRow[key] = dataRow[key]));
    return dataRow;
  });

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  },
  tableHeader: {
    fontWeight: 600,
    color: 'navy'
  },
  tableRow: {
    textAlign: 'center'
  },
  flex: {
    margin: '0 auto'
  },
  icons: {
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}));

const StickyHeadTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(createData(fakeData));
  console.log(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  className={classes.tableHeader}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((game, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={game.code}>
                    <TableCell>
                      <strong>{index + 1}</strong>
                    </TableCell>
                    <TableCell>
                      <Tooltip title={`Visit ${game.title}`}>
                        <IconButton aria-label="more details">
                          <Avatar
                            alt={game.title}
                            src={game.headerImage}
                            onClick={() => {
                              window.location.href = game.url;
                            }}
                          />{' '}
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <strong>{game.title}</strong>
                    </TableCell>
                    <TableCell>{round(game.score, 2)}</TableCell>
                    <TableCell>+ {game.minInstalls.toLocaleString()}</TableCell>
                    <TableCell>
                      {/* status formatting */}
                      {game.status}
                    </TableCell>
                    <TableCell>
                      <div className={classes.icons}>
                        {/* <Tooltip title="Delete Game">
                          <IconButton aria-label="delete">
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}

                        <Tooltip title="Send Email">
                          <IconButton aria-label="Send Email">
                            <SendIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        <GameDetailsDialog game={game} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page'
        }}
        nextIconButtonProps={{
          'aria-label': 'next page'
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
