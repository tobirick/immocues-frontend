import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/customers" component={CustomersPage} exact />
        <Route path="/customers/new" component={NewCustomerPage} exact />
        <Route path="/customers/:id/edit" component={EditCustomerPage} />
        <Route path="/customers/:id" component={CustomerPage} />
        <Route path="/objects" component={ObjectsPage} exact />
        <Route path="/objects/new" component={NewObjectPage} exact />
        <Route path="/objects/:id/edit" component={EditObjectPage} />
        <Route path="/objects/:id" component={ObjectPage} />
        <Route path="/calendar" component={CalendarPage} exact />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
