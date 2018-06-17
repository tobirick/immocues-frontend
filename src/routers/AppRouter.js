import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserRoute from "../helpers/auth/UserRoute";
import GuestRoute from "../helpers/auth/GuestRoute";

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

import LoginPage from "../pages/Auth/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
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
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
