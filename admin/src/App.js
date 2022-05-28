
import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
import AllStudent from './components/AllStudent'
import EditStudent from './components/EditStudent'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import { useState } from 'react';


function App() {
  let data={
    earning:"20,000",
    annual:"2,40,000",
    task:20,
    pending:26
  }
  let [Students,setStudents]=useState([
    {name:"suwithra",
     email:"suwi@gmail.com",
     mobile:"7550208586"
    },
    {
      name:"gayathri",
      email:"gayu@gmail.com",
      mobile:"21264785745"
    },
    {
      name:"sandhya",
      email:"sandy@gmail.com",
      mobile:"56273737945"
    }
  ])
  return<>
  <BrowserRouter>
  <div style={{display:"flex",flextemplatecolumns:"20% 80%"}}>
  <div><Sidebar/></div>
    <div>
<Routes>
  <Route path="/dashboard" element={<Dashboard value={data}/>}/>
  <Route path="/all-student" element={<AllStudent value={{Students,setStudents}}/>}/>
  <Route path="/add-student" element={<AddStudent  value={{Students,setStudents}}/>}/>
  <Route path="/edit-student/:id" element={<EditStudent  value={{Students,setStudents}}/>}/>
  <Route path="/" element={<Dashboard value={data}/>}/>
</Routes>


    </div>
    </div>
    </BrowserRouter>
  </>    
}

export default App;
