import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import WatchPage from './components/WatchPage';
import VideoContainer from './components/VideoContainer';
import { Provider } from 'react-redux';
import Store from './components/utils/Store';
import Header from './components/Header';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Body/>,
    children:[
      {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path: "/",
        element:<VideoContainer/>
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Provider store={Store}>
        <RouterProvider router={appRouter}>
          <Header/>
          <Body/>
        </RouterProvider>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
