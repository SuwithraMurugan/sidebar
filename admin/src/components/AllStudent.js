import React from 'react'
import { Table } from 'react-bootstrap';
import{ Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function AllStudent(props) {
  let navigate=useNavigate()
  let handleDelete=(i)=>{
    let newArray=[...props.value.Students]
    newArray.splice(i,1)
    props.value.setStudents(newArray)
  }
  console.log(props)
  return <>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
      </tr>
    </thead>
    <tbody>
      {
        props.value.Students.map((e,i)=>{
          return<tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td><Button variant='Danger' onClick={()=>handleDelete(i)}>Delete</Button></td>
            <span>&nbsp;&nbsp;</span>
            <td> <Button variant='primary' onClick={()=>navigate(`/edit-student/${i}`)}>Edit</Button></td>
            
    </tr>
        })
      }
    </tbody>
  </Table>
  </>
}
export default AllStudent;