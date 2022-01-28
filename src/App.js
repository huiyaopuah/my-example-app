import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import RoutingList from './router/RouteList';
import MainLayout from './components/main-layout/MainLayout';
import { CommonContextProvider } from './context/CommonContext';
import Login from './pages/login/Login';
import History from './router/History';

export default function App() {
  return (
    <Router history={History}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route exact path="/login" ><Login /></Route>
        
        <CommonContextProvider>
          <MainLayout />
          {/* { RoutingList() } */}
        </CommonContextProvider>
      </Switch>
    </Router>
  );
}
