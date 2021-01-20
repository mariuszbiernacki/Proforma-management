import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddProformaFormPage from "../pages/AddProformaFormPage";
import ProformaTablePage from "../pages/ProformaTablePage";
import FilterProformaTablePage from "../pages/FilterProformaTablePage";
import Template from "../NavigationTemplate/Template";

const Root = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/AddProformaFormPage" component={AddProformaFormPage} />
          <Route path="/ProformaTablePage" component={ProformaTablePage} />
          <Route
            path="/FilterProformaTablePage"
            component={FilterProformaTablePage}
          />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};

export default Root;
