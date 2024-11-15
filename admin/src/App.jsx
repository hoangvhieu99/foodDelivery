import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { userRouter } from "./routes/userRouter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {userRouter.map((route, index) => (
          <Route
            key={index}
            index
            path={route.path}
            element={route.component}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
