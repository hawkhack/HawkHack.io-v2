import React from 'react';

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import DashboardPage from './views/DashboardPage/Dashboard'

const dashboardRoutes = [
	{
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  }
]

export default dashboardRoutes