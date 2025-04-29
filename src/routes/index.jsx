import { Outlet } from "react-router-dom";

import { SetupProvider } from "../contexts/setupContext";
import Layout from "../layouts";
import Work from "../pages/work";
import About from "../pages/about";
import Contact from "../pages/contact";
import Detail from "../pages/detail";

export function routes() {
  return [
    {
      path: "/",
      element: (
        <SetupProvider>
          <Layout>
            <Outlet />
          </Layout>
        </SetupProvider>
      ),
      children: [
        { index: true, element: <Work /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "work/:workItem", element: <Detail /> },
      ],
    },
  ];
}
