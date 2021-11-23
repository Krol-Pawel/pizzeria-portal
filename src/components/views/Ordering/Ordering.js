import React from 'react';
// import styles from './Ordering.scss';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import { NavLink } from 'react-router-dom';

const content = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 11},
  {id: '4', status: 'prepared', order: 22},
  {id: '5', status: 'delivered', order: 33},
  {id: '6', status: 'paid', order: 44},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/orderingnew`}>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/orderingnew`}>new order</Button>
        );
    case 'ordered':
      return (
        <>
          <Button>prepared</Button>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/orderingnew`}>new order</Button>
        </>
      );
    case 'prepared':
      return (
        <>
          <Button>delivered</Button>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/orderingnew`}>new order</Button>
        </>
      );
    case 'delivered':
      return (
        <>
          <Button>paid</Button>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/orderingnew`}>new order</Button>
        </>
      );
    case 'paid':
      return (
        <>
          <Button>free</Button>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/orderingnew`}>new order</Button>
        </>
      );
    default:
      return null;
  }
};

const Ordering = () => {
  return ( 
    <div>
      <Typography variant='h4'>OrderWaiter view</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Table</TableCell>
              <TableCell align='left'>Status</TableCell>
              <TableCell align='left'>Order</TableCell>
              <TableCell align='left'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='left'>{row.id}</TableCell>
                <TableCell align='left'>{row.status}</TableCell>
                <TableCell align='left'>{row.order}</TableCell>
                <TableCell align='left'>{renderActions(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
  }

export default Ordering;