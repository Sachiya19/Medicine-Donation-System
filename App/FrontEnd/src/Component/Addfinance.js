import React,{useState} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio
} 
from 'mdb-react-ui-kit';
import { Card, Container, Row, Col} from "react-bootstrap";




export default function Addfinance(){

    const [name, setname] = useState("");
    const [ID, setID] = useState("");
    const [Hold, setHold] = useState("");
   // const [nationality, setnationality] = useState("");
   // const [phone, setphone] = useState("");
   // const [tnds, settnds] = useState("");


  const navigate = useNavigate(); 
    

    function senddata(e)
    {
        
     
     
      e.preventDefault();
      
      const newfinance ={
        
          name,
          ID,
          //email,
         // nationality,
          Hold,
         // tnds,

      }

      
       axios.post("http://localhost:8070/finance/add",newfinance).then(()=>{

         
        alert("Succesfully") 
      navigate("/");

       })


    }


    return (

      <div className="container"><br></br>
      <h2>Add finance Details</h2>

      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>

          <form onSubmit={senddata}>
            <div className="form-group">

          <MDBCol md='6'>
           <label for="name">Report Name</label>
           <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter report name" 
           
           onChange={(e)=>{

               setname(e.target.value);

           }}/>
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
           <label for="name">Report ID</label>
           <input type="text" className="form-control" id="lastid" aria-describedby="emailHelp" placeholder="Enter report id"
           
           onChange={(e)=>{

               setID(e.target.value);

           }}/>
           <br></br>
           </MDBCol>
        </div>
    {/* 
        <div className="form-group">
        <MDBCol md='6'>
             <label for="email">Email</label>
             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"
             
             onChange={(e)=>{

                 setemail(e.target.value);

             }}/>
             <br></br>
             </MDBCol> 
            </div> */}

              <div className="form-group">
        <MDBCol md='6'>
             <label for="nationality">Added By</label>
             <input type="text" className="form-control" id="nationality" aria-describedby="emailHelp" placeholder="Enter adder "
             
             onChange={(e)=>{

                 setHold(e.target.value);

             }}/>
             <br></br>
             </MDBCol>   
             </div>
    
{/* 
        <div className="form-group">
        <MDBRow>
        <Col md='6'>
           <label for="mobile">phone</label>
           <input type="tel" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Mobile No"
          
           onChange={(e)=>{

               setphone(e.target.value);

           }}/>
           <br></br>
           </Col>
        
        <Col md='6'>
           <label for="tnds">Number of Days In Sri Lanka</label>
           <input type="number" className="form-control" id="tnds" aria-describedby="emailHelp" placeholder="Number of Days In Sri Lanka"
           
           onChange={(e)=>{

               settnds(e.target.value);

           }}/>
           <br></br>
           </Col>
           </MDBRow>
        </div> */}

       <button type="submit" className="btn btn-primary">Confirm</button>
      </form>
      </MDBCard>
      </MDBRow>
      </MDBContainer>
      </div>
    )

          }