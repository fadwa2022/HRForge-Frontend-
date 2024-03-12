import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@/pages/public/PublicRouter";
import AdminRouter from "@/pages/Admin/AdminRouter";
import AuthRouter from "@/pages/Auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />}></Route>
          <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <AdminRouter />
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
