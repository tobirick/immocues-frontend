import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Script from "react-load-script";

import UserRoute from "../helpers/auth/UserRoute";
import GuestRoute from "../helpers/auth/GuestRoute";
import AdminRoute from "../helpers/auth/AdminRoute";

import Header from "../components/Layout/Header";
import DashboardPage from "../pages/DashboardPage";

import CustomersPage from "../pages/CustomersPage";
import CustomerPage from "../pages/CustomerPage";
import EditCustomerPage from "../pages/EditCustomerPage";
import NewCustomerPage from "../pages/NewCustomerPage";

import ObjectsPage from "../pages/ObjectsPage";
import ObjectPage from "../pages/ObjectPage";
import EditObjectPage from "../pages/EditObjectPage";
import NewObjectPage from "../pages/NewObjectPage";

import CalendarPage from "../pages/CalendarPage";

import SettingsPage from "../pages/Settings/SettingsPage";

import AdminPage from "../pages/Admin/AdminPage";
import NewEmployeePage from "../pages/Admin/NewEmployeePage";

import LoginPage from "../pages/Auth/LoginPage";

import Home from "../pages/LandingPage/Home";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Script url="/fontawesome-all.min.js" />
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <GuestRoute path="/login" component={LoginPage} exact />
        <UserRoute path="/dashboard" component={DashboardPage} exact />
        <UserRoute path="/customers" component={CustomersPage} exact />
        <UserRoute path="/customers/new" component={NewCustomerPage} exact />
        <UserRoute path="/customers/:id/edit" component={EditCustomerPage} />
        <UserRoute path="/customers/:id" component={CustomerPage} />
        <UserRoute path="/objects" component={ObjectsPage} exact />
        <UserRoute path="/objects/new" component={NewObjectPage} exact />
        <UserRoute path="/objects/:id/edit" component={EditObjectPage} />
        <UserRoute path="/objects/:id" component={ObjectPage} />
        <UserRoute path="/calendar" component={CalendarPage} exact />
        <UserRoute path="/settings" component={SettingsPage} />
        <AdminRoute path="/admin" component={AdminPage} />
        <AdminRoute path="/employees/new" component={NewEmployeePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
