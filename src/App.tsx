import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import './App.css';
import { Base } from './components/Base';
import { Login } from './components/Login';
import {Register} from "./components/Register";

import { LogList } from 'objects/Logs/view/LogList';
import { LogNew } from 'objects/Logs/view/LogNew';

const queryClient = new QueryClient();

function App() {
  const [user,setUser]=useState<{id:number,name:string,email:string}|null>(null)
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base user={user} />}>
            <Route path="login" element={<Login set={setUser} />} />
            <Route path="register" element={<Register set={setUser} />} />
            <Route path="log" element={<LogList userId={1} />} />
            <Route path="new" element={<LogNew user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
