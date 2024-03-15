import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Layout } from "@/pages/public";
import Error from "@/_utils/Error";

function PublicRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default PublicRouter;
