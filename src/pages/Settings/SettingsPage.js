import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
                  <Route path="/settings/basic" component={BasicPage} />
                  <Route path="/settings/about" component={AboutPage} />
                  <Route path="/settings/account" component={AccountPage} />
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
