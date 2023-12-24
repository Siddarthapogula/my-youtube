import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Store from './components/utils/Store';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import VideoContainer from './components/VideoContainer';
import SuggestedVideos from './components/SuggestedVideos';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <div>
            <Header/>
            <Body/>
            </div>,
      children:[
        {
          path: "/suggestedvideos/:query",
          element: <SuggestedVideos/>
        },
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
  return (
    
   
    <Provider store={Store}>
         
        <RouterProvider router={appRouter}>
        </RouterProvider>
    </Provider>
  );
}



export default App;
