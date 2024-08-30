import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LayoutOne from "./layout/LayoutOne";
import HostingPage from "./Pages/HostingPage";
import DomainPage from "./Pages/DomainPage";
import SeoPage from "./Pages/SeoPage";
import EmailPage from "./Pages/EmailPage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<HostingPage />} />
          <Route path="/domain" element={<DomainPage />} />
          <Route path="/domain" element={<SeoPage />} />
          <Route path="/domain" element={<EmailPage />} />
          <Route path="*" element={<DomainPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
