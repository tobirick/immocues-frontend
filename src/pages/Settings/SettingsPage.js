import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserRoute from "../../helpers/auth/UserRoute";
import SubHeader from "../../components/Layout/SubHeader";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";
import SettingsNav from "../../components/SettingsPage/SettingsNav";

export class SettingsPage extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <SubHeader title="Settings" />
        <div className="content pt-3">
          <div className="row">
            <div className="col-9">
              <div className="content__box p-2">
                <Switch>
                  <Redirect exact from="/settings" to="/settings/basic" />
                  <UserRoute
                    path="/settings/basic"
                    component={BasicPage}
                    exact
                  />
                  <UserRoute
                    path="/settings/about"
                    component={AboutPage}
                    exact
                  />
                  <UserRoute
                    path="/settings/account"
                    component={AccountPage}
                    exact
                  />
                </Switch>
              </div>
            </div>
            <div className="col-3">
              <div className="content__box">
                <SettingsNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsPage;
