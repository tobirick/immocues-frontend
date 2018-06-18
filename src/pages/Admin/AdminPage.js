import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminRoute from "../../helpers/auth/AdminRoute";
import SettingsPage from "./SettingsPage";
import EmployeesPage from "./EmployeesPage";
import AdminNav from "../../components/AdminPage/AdminNav";
import SubHeader from "../../components/Layout/SubHeader";

export class AdminPage extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <SubHeader title="Admin" />
        <div className="content pt-3">
          <div className="row">
            <div className="col-9">
              <div className="content__box p-2">
                <Switch>
                  <Redirect exact from="/admin" to="/admin/employees" />
                  <AdminRoute
                    path="/admin/employees"
                    component={EmployeesPage}
                    exact
                  />
                  <AdminRoute
                    path="/admin/settings"
                    component={SettingsPage}
                    exact
                  />
                </Switch>
              </div>
            </div>
            <div className="col-3">
              <div className="content__box">
                <AdminNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
