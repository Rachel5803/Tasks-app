import './App.css';
import { useState } from "react";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Layout from "./common/Layout";
import Homepage from './Homepage';
import Taskslist from "./tasks/Taskslist";
import Addtask from "./tasks/Addtask";
import Updatetask from './tasks/Updatatask';
import Postslist from './posts/Postslist';
import Addpost from './posts/Addpost';
import Updatepost from './posts/Updatepost';
import Userslist from './users/Userslist'
import Adduser from './users/Adduser';
import Updateuser from './users/updateuser';
import Photoslist from './photos/Photoslist'
import Addphoto from './photos/Addphoto';
import Updatephoto from './photos/Updatephoto';
function App() {
  
  return (
    <div className="body">
      <Router> 
        <Routes >
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path="/tasks" element={<Taskslist/>}/>
                <Route path="/posts" element={<Postslist/>}/>
                <Route path="/users" element={<Userslist/>}/>
                <Route path="/photos" element={<Photoslist/>}/>
                <Route path="/tasks/add" element={<Addtask/>}/>
                <Route path="/posts/add" element={<Addpost/>}/>
                <Route path="/users/add" element={<Adduser/>}/>
                <Route path="/photos/add" element={<Addphoto/>}/>
                <Route path="/tasks/update/:id" element={<Updatetask/>}/>
                <Route path="/posts/update/:id" element={<Updatepost/>}/>
                <Route path="/users/update/:id" element={<Updateuser/>}/>
                <Route path="/photos/update/:id" element={<Updatephoto/>}/>
                </Route>
            </Routes>
        </Router> 
        
        
        </div>
  );
}
export default App;
