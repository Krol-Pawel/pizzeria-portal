import MainLayout from "./components/layout/MainLayout/MainLayout";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Login from "./components/views/Login/Login";
import Tables from "./components/views/Tables/Tables";
import Kitchen from "./components/views/Kitchen/Kitchen";
import OrderWaiter from "./components/views/OrderWaiter/OrderWaiter";
import TablesBooking from "./components/views/TablesBooking/TablesBooking";
import TablesEvent from "./components/views/TablesEvent/TablesEvent";
import OrderingNew from "./components/views/OrderingNew/OrderingNew";
import OrderingOrder from "./components/views/OrderingOrder/OrderingOrder";
import Homepage from "./components/views/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/tablesbooking/:id'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/tablesevent/:id'} component={TablesEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={OrderWaiter} />
          <Route exact path={process.env.PUBLIC_URL + '/orderwaiter/orderingnew'} component={OrderingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/orderwaiter/orderingorder/:id'} component={OrderingOrder} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
