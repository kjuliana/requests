import React from 'react';
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GetPage from "./pages/GetPage/GetPage";
import PostPage from "./pages/PostPage/PostPage";
import DeletePage from "./pages/DeletePage/DeletePage";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {RequestsProvider} from "./context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <GetPage/>,
      },
      {
        path: "/post",
        element: <PostPage/>,
      },
      {
        path: "/delete",
        element: <DeletePage/>,
      },
      {
        path: "/get",
        element: <GetPage/>,
      },
      {
        path: '/*',
        element: <ErrorPage/>
      }
    ]
  }
]);

function App() {
  return (
      <RequestsProvider>
        <RouterProvider router={router}/>
      </RequestsProvider>
  );
}

export default App;
