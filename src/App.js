import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@/pages/public/PublicRouter";
import AuthRouter from "@/pages/Auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGards";
import GARouter from "./pages/Generaladministration/GA.Router";
import GeneralAdminGuard from "./_helpers/GeneraladminGards";
import RhAdministratorGards from "./_helpers/RhAdministratorGards";
import CHRORouter from "./pages/CHRO/CHRO.Router";
import PersonnelRouter from "./pages/Personnel/PersonnelRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />}></Route>
          <Route
            path="/chro/*"
            element={
               <AuthGuard>
               <RhAdministratorGards>
                  <CHRORouter />
              </RhAdministratorGards>
             </AuthGuard>
            }
          ></Route>
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
          <Route
            path="/personnel/*"
            element={
                <PersonnelRouter />
            }
          ></Route>
          <Route path="/auth/*" element={<AuthRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
