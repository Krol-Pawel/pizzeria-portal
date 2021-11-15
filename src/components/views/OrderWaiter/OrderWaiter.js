import React from 'react';
import styles from './OrderWaiter.scss';
import { Link } from 'react-router-dom';

class OrderWaiter extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h2>OrderWaiter view</h2>
        <Link to={`${process.env.PUBLIC_URL}/orderwaiter/orderingnew`} activeClassName='active'>New order</Link>
        <Link to={`${process.env.PUBLIC_URL}/orderwaiter/orderingorder/number15`} activeClassName='active'>Order number15</Link>
      </div>
    );
  }
}
export default OrderWaiter;