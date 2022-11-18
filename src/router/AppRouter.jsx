import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import CalendarPage from "../calendar/pages/CalendarPage";
import CalendarApp from "../CalendarApp";

import { getEnvVariables } from "../helpers/getEnvVariables";
export default function AppRouter() {
  const authStatus = "not-authenticated";
  console.log(getEnvVariables());
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
