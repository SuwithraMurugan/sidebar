import React ,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {useParams,useNavigate} from 'react-router-dom';

function EditStudent(props) {
  console.log(props)

useEffect(()=>{
  if(params.id<props.value.Students.length)
  {
    getData();
  }
  else{
     alert("selected students not available")
  }
},[])
let params=useParams();
console.log(params)
    let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  
let getData=()=>{
  setName(props.value.Students[params.id].name)
  setEmail(props.value.Students[params.id].email)
  setMobile(props.value.Students[params.id].mobile)
}
let handleSubmit = () => 
{
  let newData = {name, email, mobile};
  let newArray=[...props.value.Students]
    newArray.splice(params.id,1,newData)
    props.value.setStudents(newArray)
  navigate("/all-student");
};
    
  
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        We'll never share your email with anyone else.
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="text"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        update
      </Button>
    </Form>
  );
  }
export default EditStudent
