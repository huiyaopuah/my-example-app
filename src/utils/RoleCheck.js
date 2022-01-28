import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import AdminMenu from '../components/main-layout/side-menu/admin-menu/AdminMenu';
import AgentMenu from '../components/main-layout/side-menu/agent-menu/AgentMenu';
import { AuthContext } from '../context/AuthContext';

export default function RoleCheck(collapsed) {
  const { role } = useContext(AuthContext);

  function renderMenu() {
    switch (role) {
      case 'admin': return <AdminMenu collapsed={collapsed}/>
      case 'agent': return <AgentMenu collapsed={collapsed}/>
      default: return (<Redirect to='/error/error-500' />)
    }
  }
  
  return (renderMenu());
}