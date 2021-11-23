import MainLayout from "./components/layout/MainLayout/MainLayout";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Login from "./components/views/Login/Login";
import Tables from "./components/views/Tables/Tables";
import Kitchen from "./components/views/Kitchen/Kitchen";
import Ordering from "./components/views/Ordering/Ordering";
import Booking from "./components/views/Booking/Booking";
import Event from "./components/views/Event/Event";
import OrderingNew from "./components/views/OrderingNew/OrderingNewContainer";
import Order from "./components/views/Order/Order";
import Homepage from "./components/views/Homepage/Homepage";
import { StylesProvider } from '@material-ui/styles';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering/orderingnew'} component={OrderingNew} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
