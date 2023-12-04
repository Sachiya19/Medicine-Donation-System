import React , {useState , useEffect} from "react";
import axios from "axios";


export default function Editfinance(){



   const [name, setname] = useState("");
   const [ID, setID] = useState("");
   const [Hold, setHold] = useState("");
   

   const [financess, setfinances] = useState([]);

   function updateinfo (e) {
    e.preventDefault();

    const Editfinance = {

        name,
        ID,
        //email,
       // nationality,
        Hold,
       // tnds,

    }
        axios.put(`http://localhost:8070/finance/update/6328a8d35f82101120fcca42`,Editfinance).then((res) => {
            alert("finance Details Updated");
            setfinances(res.data);
            
        }).catch((err) => {
            alert(err.message);
        })
}
      
    return(

        <div className="container">
        <br></br>
        <br></br>
        <br></br>

  
  <form onSubmit={updateinfo} >
    <div class="mb-3">
  
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your Name"
      onChange={(e) =>{
  
  
       setname(e.target.value);
  
      }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">ID</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your ID"
      onChange={(e) =>{
  
  
        setID(e.target.value);
   
       }}/>
  
    </div>
  {/*
  <div className="mb-3">
  
      <label for="exampleInputEmail1" class="form-label">Email ID</label>
      <input type="email" class="form-control" id="email" placeholder="Enter Email" 
      onChange={(e) =>{
  
  
        setemail(e.target.value);
   
       }}/>
    </div>
    
    <div className="mb-3">
  
      <label for="name" class="form-label">Nationality</label>
      <input type="text" class="form-control" id="Nationality" placeholder="Enter Your Nationality"
      onChange={(e) =>{
  
  
        setnationality(e.target.value);
   
       }}/>
  
    </div>
    */}
    <div className="mb-3">
  
      <label for="name" class="form-label">Telehone Number</label>
      <input type="text" class="form-control" id="phone" placeholder="Enter Phone Number" 
      onChange={(e) =>{
  
  
        setHold(e.target.value);
   
       }}/>
  
    </div>
  {/*
    <div className="mb-3">
  
      <label for="name" class="form-label">Total No Of Days in Sri Lanka</label>
      <input type="text" class="form-control" id="tnds" placeholder="Enter Total No Of Days in Sri Lanka"
      onChange={(e) =>{
  
  
        settnds(e.target.value);
   
       }} />
  
    </div>
    
    */}
  
    <button type="submit" class="btn btn-primary">Upadte</button>
  </form>
  
  
  
  
          </div>
  
        
      )
     
       
}