import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/"/>
      </Route>
    </Routes>
  );
}