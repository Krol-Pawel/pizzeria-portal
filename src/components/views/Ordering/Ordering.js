import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';

class Ordering extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h2>Ordering view</h2>
        <Link to={`${process.env.PUBLIC_URL}/ordering/orderingnew`} activeClassName='active'>New order</Link>
        <Link to={`${process.env.PUBLIC_URL}/ordering/order/number15`} activeClassName='active'>Order number15</Link>
      </div>
    );
  }
}
export default Ordering;