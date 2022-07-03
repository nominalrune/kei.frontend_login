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

import { PostList } from 'Post/view/PostList';
import { PostNew } from 'Post/view/PostNew';
import { PostDetail } from 'Post/view/PostDetail';

import { LogList } from 'Logs/view/LogList';
import { LogNew } from 'Logs/view/LogNew';

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
            <Route path="post" element={<Register set={setUser} />} >
              <Route index element={<PostList userId={user.id} />}/>
              <Route path="new" element={<PostNew userId={user.id}  />} />
              <Route path=":id" element={<PostDetail userId={user.id} postId={} />} />
            </Route>
            <Route path="log" element={<LogList userId={1} />} />
            <Route path="new" element={<LogNew user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
