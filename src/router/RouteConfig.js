import React, { useContext } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Error403 from '../pages/other/error-403/Error403';
import Error404 from '../pages/other/error-404/Error404';
import routes from './RouteList';

export default function RouteConfig() {
    const location = useLocation();
    const { role } = useContext(AuthContext);
  
    const routesWithID = routes.filter(route => route.path.includes('/:'));   // Get list of routes with ID
    const routesWithoutID = routesWithID.map(route => route.path.split('/:')[0]);   // Split routesWithID into routesWithoutID
    const routeIDCheck = routesWithoutID.some(routeWithoutID => location.pathname.includes(routeWithoutID));    // Check if current url consist a match with routesWithoutID or else
  
    if(routeIDCheck) {
      const currentUrlWithoutID = location.pathname.slice(0, location.pathname.lastIndexOf('/'));   // Get currentUrlWithoutID
      const currentUrlWithoutID2 = location.pathname.slice(0, currentUrlWithoutID.lastIndexOf('/'));   // Temparory solve for route with multiple params issue

      const routeExist = routes.some(route => route.path.includes(currentUrlWithoutID2));  // Check if currentUrlWithoutID is exist
      
      if(routeExist) {
        const authenticate = routes.some(route => route.path.includes(currentUrlWithoutID2) && route.authority.includes(role));    // If exist, check if user have authority
  
        if(authenticate) {
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
        } else {
          return ( <Error403 /> )
        }
      } else {
        return ( <Error404 /> )
      }
  
    } else {
      const routeExist = routes.some(route => route.path.includes(location.pathname));    // Check if current url is exist
  
      if(routeExist) {
        const authenticate = routes.some(route => route.path.includes(location.pathname) && route.authority.includes(role));    // If exist, check if user have authority
  
        if(authenticate) {
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
        } else {
          return ( <Error403 /> )
        }
      } else {
        return ( <Error404 /> )
      }
    } 
  }