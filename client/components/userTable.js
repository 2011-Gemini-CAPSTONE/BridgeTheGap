import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const columns = [
  {id: 'jobTitle', label: 'Job Title', minWidth: 170},
  {id: 'team', label: 'Job Field', minWidth: 100},
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'education',
    label: 'Education',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'salary',
    label: 'Salary',
    minWidth: 170,
    align: 'left',
    format: value =>
      Number(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
  }
]

const useStyles = makeStyles({
  root: {
    width: '80%'
  },
  container: {
    maxHeight: 440
  }
})

export default function UserTable(props) {
  const {data} = props

  const rows = data
  console.log(rows)
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
