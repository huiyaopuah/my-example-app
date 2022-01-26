import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
// import RoutingList from './router/RouteList';
import MainLayout from './components/main-layout/MainLayout';
import History from './router/History';

export default function App() {
  return (
    <Router history={History}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <MainLayout />
        {/* { RoutingList() } */}
      </Switch>
    </Router>
  );
}
