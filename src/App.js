import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@/pages/public/PublicRouter";
import AuthRouter from "@/pages/Auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGards";
import GARouter from "./pages/Generaladministration/GA.Router";
import GeneralAdminGuard from "./_helpers/GeneraladminGards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />}></Route>
         {/*  <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            }
          ></Route> */}
          <Route
            path="/generalAdministration/*"
            element={
              <AuthGuard>
                <GeneralAdminGuard>
                  <GARouter />
                </GeneralAdminGuard>
              </AuthGuard>
            }
          ></Route>
          <Route path="/auth/*" element={<AuthRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
