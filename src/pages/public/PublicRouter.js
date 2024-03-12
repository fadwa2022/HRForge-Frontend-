import React from 'react'
import {Route, Routes } from "react-router-dom";

import {Home , Service ,Contact ,Layout} from "@/pages/public";
import Error from "@/_utils/Error";
  
function PublicRouter() {
  return (
<Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="home" element={<Home />} />

      <Route path="service" element={<Service />} />

      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<Error />} />
    </Route>
    </Routes>
    )
}

export default PublicRouter