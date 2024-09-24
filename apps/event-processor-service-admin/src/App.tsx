import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedEventList } from "./processedEvent/ProcessedEventList";
import { ProcessedEventCreate } from "./processedEvent/ProcessedEventCreate";
import { ProcessedEventEdit } from "./processedEvent/ProcessedEventEdit";
import { ProcessedEventShow } from "./processedEvent/ProcessedEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"EventProcessorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedEvent"
          list={ProcessedEventList}
          edit={ProcessedEventEdit}
          create={ProcessedEventCreate}
          show={ProcessedEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
