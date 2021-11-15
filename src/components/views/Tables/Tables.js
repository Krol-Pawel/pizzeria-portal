import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

class Tables extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h2>Tables view</h2>
          <Link to={`${process.env.PUBLIC_URL}/tables/tablesbooking/bookingnumber`} activeClassName='active'>number 7</Link>
          <Link to={`${process.env.PUBLIC_URL}/tables/tablesevent/eventnumber`} activeClassName='active'>dinner</Link>
      </div>
    );
  }
}
export default Tables;