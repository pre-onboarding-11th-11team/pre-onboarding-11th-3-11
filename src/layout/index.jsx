import React from 'react';
import { Outlet } from 'react-router-dom';
import { GitHubProvider } from '../common/context/GitHubContext';

const Layout = () => {
  return (
    <GitHubProvider>
      <Outlet />
    </GitHubProvider>
  );
};

export default Layout;
