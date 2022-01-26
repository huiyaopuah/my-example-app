import { Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import Error403 from '../pages/other/error-403/Error403';
import Error404 from '../pages/other/error-404/Error404';
import Error500 from '../pages/other/error-500/Error500';

const routes = [
  {
    path: '/login',
    component: Login,
    key: '/login',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    key: '/dashboard',
  },
  {
		path: "/error/error-403",
		component: Error403,
		key: "/error/error-403",
		authority: ["admin", "sub", "agent"],
	},
  {
		path: "/error/error-404",
		component: Error404,
		key: "/error/error-404",
		authority: ["admin", "sub", "agent"],
	},
  {
		path: "/error/error-500",
		component: Error500,
		key: "/error/error-500",
		authority: ["admin", "sub", "agent"],
	},
];

function RoutingList() {
  return routes.map(item => {
    if (item.path.split('/').length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }
    return <Route path={item.path} component={item.component} key={item.key} exact={item.exact} />;
  });
}
  
  export default RoutingList;