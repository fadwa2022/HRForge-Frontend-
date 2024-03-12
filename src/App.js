import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@/pages/public/PublicRouter";
import AdminRouter from "@/pages/Admin/AdminRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />}></Route>
          <Route path="/admin/*" element={<AdminRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
