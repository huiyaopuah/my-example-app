import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import Page1 from '../pages/page-1/Page1';
import Page2 from '../pages/page-2/Page2';
import Page3 from '../pages/page-3/Page3';
import Page4 from '../pages/page-4/Page4';
import Profile from '../pages/profile/Profile';
import Setting from '../pages/setting/Setting';

const routes = [
  {
    path: '/login',
    component: Login,
    key: '/login',
    authority: ["admin", "agent"],
  },
  {
    path: '/dashboard',
    component: Dashboard,
    key: '/dashboard',
    authority: ["admin", "agent"],
  },
  {
    path: '/profile',
    component: Profile,
    key: '/profile',
    authority: ["admin", "agent"],
  },
  {
    path: '/setting',
    component: Setting,
    key: '/setting',
    authority: ["admin", "agent"],
  },
  {
    path: '/page-1',
    component: Page1,
    key: '/page-1',
    authority: ["admin", "agent"],
  },
  {
    path: '/page-2',
    component: Page2,
    key: '/page-2',
    authority: ["admin", "agent"],
  },
  {
    path: '/page-3',
    component: Page3,
    key: '/page-3',
    authority: ["admin"],
  },
  {
    path: '/page-4',
    component: Page4,
    key: '/page-4',
    authority: ["admin"],
  },
  // {
	// 	path: "/error/error-403",
	// 	component: Error403,
	// 	key: "/error/error-403",
	// 	// authority: ["admin", "agent"],
	// },
  // {
	// 	path: "/error/error-404",
	// 	component: Error404,
	// 	key: "/error/error-404",
	// 	// authority: ["admin", "agent"],
	// },
  // {
	// 	path: "/error/error-500",
	// 	component: Error500,
	// 	key: "/error/error-500",
	// 	// authority: ["admin", "agent"],
	// },
];

export default function RoutingList() {
  const { isLogin, cookies } = useContext(AuthContext);

  if (!isLogin || cookies.username === undefined) {
    return <Redirect to='/login' />
  }

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