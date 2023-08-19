import axios from "axios";
import "./succ.css";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import{resp} from "../login/login";
import SuccessHeader from "./successHeader";
import Item from "./listItem";
let foundEntry = {}
function Success(){
    const hello = useNavigate();
    const[spec, setSpec] = useState(" ");
    //const[state, setState] = useState(" ");    
    const [entries, setEntries] = useState([]);
     const [name, setName] = useState("");
     const[show, setShow] = useState(false);
     const[hit, setHit] = useState();
     useEffect(() => {
        console.log(name);
     },[name])
    useEffect(() => {
            async function getEntry(){
            try {
                const res = await axios.get("http://localhost:4000/api/entries")
                setEntries(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getEntry();
      }, []);

      entries.forEach(entry => {
        if(entry.email === resp){
            foundEntry = entry
        }

      })

    //   console.log(foundEntry);

    const handleSearch = async () => {
        try {
          const res = await axios.post(`http://localhost:4000/api/doctors`,{spec: spec, state: name})
           console.log(res.data);
          
          if(res.data.length > 0){
            setShow(true);
            setHit(res.data);

          }else{
            setShow(false)
          }
        } catch (error) {
          console.log(error)
        }
      }
    return(
        <div className="success">
            <SuccessHeader name = {(foundEntry.fName)}/>
            <button className=" logout-btn btn btn-danger" onClick={() => {hello('/')}}>Logout</button>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Basic Info</h5>
                            <h6 className="info">First Name:  </h6> <p className="info">{foundEntry.fName}</p><br/>
                            <h6 className="info">Last Name:  </h6> <p className="info">{foundEntry.lName}</p><br />
                            <h6 className="info">Email:  </h6> <p className="info">{foundEntry.email}</p><br/>
                            
                            
                        
                    </div>
                </div>
                </div>
            </div>
            <div className="area-selector">
                <h2 style={{"display": "inline-block", "margin-right": "15px"}}>Select your area:</h2>
                <select name="state" id="selectBox" onChange={(e)=>{setName(e.target.value)}} class="form-control bottom sel" >
          <option value="">State / UT *</option>
                                      <option value="Andaman">Andaman &amp; Nicobar Islands</option>
                                      <option value="Andhra_Pradesh">Andhra Pradesh</option>
                                      <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                                      <option value="Assam">Assam</option>
                                      <option value="Bihar">Bihar</option>
                                      <option value="Chandigarh">Chandigarh</option>
                                      <option value="Chattisgarh">Chattisgarh</option>
                                      <option value="Dadra_Nagar_Haveli">Dadra &amp; Nagar Haveli</option>
                                      <option value="Daman_Diu">Daman &amp; Diu</option>
                                      <option value="Goa">Goa</option>
                                      <option value="Gujarat">Gujarat</option>
                                      <option value="Haryana">Haryana</option>
                                      <option value="Himachal_Pradesh">Himachal Pradesh</option>
                                      <option value="Jammu_Kashmir">Jammu and Kashmir</option>
                                      <option value="Jharkhand">Jharkhand</option>
                                      <option value="Karnataka">Karnataka</option>
                                      <option value="Kerala">Kerala</option>
                                      <option value="Ladakh">Ladakh</option>
                                      <option value="Lakshadweep">Lakshadweep</option>
                                      <option value="Madhya_Pradesh">Madhya Pradesh</option>
                                      <option value="Maharashtra">Maharashtra</option>
                                      <option value="Manipur">Manipur</option>
                                      <option value="Meghalaya">Meghalaya</option>
                                      <option value="Mizoram">Mizoram</option>
                                      <option value="Nagaland">Nagaland</option>
                                      <option value="NCR">NCT OF Delhi</option>
                                      <option value="Odisha">Odisha</option>
                                      <option value="Puducherry">Puducherry</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Rajasthan">Rajasthan</option>
                                      <option value="Sikkim">Sikkim</option>
                                      <option value="Tamil_Nadu">Tamil Nadu</option>
                                      <option value="Telangana">Telangana</option>
                                      <option value="Tripura">Tripura</option>
                                      <option value="Uttar_Pradesh">Uttar Pradesh</option>
                                      <option value="Uttarakhand">Uttarakhand</option>
                                      <option value="West_Bengal">West Bengal</option>
                              </select>
            </div>
            
                <h2 className="h1-spec">Select Speciality</h2>
                <input onChange={(e)=>{setSpec(e.target.value)}} className="specilaity-selector" type="text" placeholder="Speciality" name="spec"/>
            
            <button onClick={e => {handleSearch(e.preventDefault())}} className="btn btn-primary search">Search</button>
            <hr className="succ-hr"/>
            {(show === true) ?  
            hit.map(((docs, index) => 
            <>
            <h1>Doctors</h1>
                <div className="col-lg-3 col-md-6">  
          <div className="card">
          <div className="card-body">
          {console.log(index)}
            <h5 className="card-title">First Name: {docs.fName}</h5>
            <p className="card-text">Last Name: {docs.lName}</p>
            <p className="card-text">Speciality: {docs.speciality}</p>
            <p className="card-text">Location: {docs.area}</p>
            <p className="card-text">State: {docs.location}</p>
          </div>
        
          </div>
          </div>
          </>
            ))
                
                        :
                        <h5>  Not Found</h5> 
            }
        </div>
    )
}

export default Success;