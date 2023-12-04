import React,{useState , useEffect} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

export default function Allfinance(){

    const navigate = useNavigate();

const [finances,setfinance] = useState([]);

useEffect(() => {

  function getfinance()
  {
     

    axios.get("http://localhost:8070/finance/").then((res) => {


       setfinance(res.data);

    }).catch((err) => {

       alert(err.message);
    })
  }

  getfinance();
  },[]); 

  function deletefinance(userId)
  {
    console.log("delete in")
    axios.delete(`http://localhost:8070/finance/delete/${userId}`).then((res) => {
        
    
    alert("Deleted") 
    navigate("/");
    
       res.json().then((res) => {
            console.warn(res)
        })
    })
}


    return(

      <div className="container"><br/>
      <h2>finance Management</h2><br></br>

     {/*<button className="btn btn-success"><a href="#" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>
      
    */}
           <br></br><table className="table">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Report Name</th>
                      <th scope="col">Report ID </th>
                      <th scope="col">Added By</th>
                      {/*<th scope="col">Nationality</th>
                      <th scope="col">Phone</th>
                    <th scope="col">Total Number of Days</th>*/}
                        <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
              {finances.map((finance,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{finance.name}</td>
                          <td>{finance.ID}</td>
                          <td>{finance.Hold}</td>
                          {/*
                          <td>{Payment.nationality}</td>
                          <td>{Payment.phone}</td>
                          <td>{Payment.tnds}</td>
              */}
                          <td>
                              <a className="btn btn-warning" href={'/Update'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deletefinance(finance._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
           </table>

             

           
  </div>
      
    )
}