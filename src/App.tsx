import ApplicationForm from "./components/page/application-form";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="application" element={<ApplicationForm />} />
      </Route>

      <Route path="*" element={<Navigate to="/application" />} />
    </Routes>
  );
}

export default App;
