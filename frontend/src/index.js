import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './index.css';
import './bootstrap.custom.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store"
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditOnePage from './pages/EditOnePage';
import EditMultiplePage from './pages/EditMultiplePage';

// Specifying routes for the frontend
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomePage/>}/>
      <Route path='/add' element={<AddPage/>}/>
      <Route path='/editone' element={<EditOnePage/>}/>
      <Route path='/editmany' element={<EditMultiplePage/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

reportWebVitals();
