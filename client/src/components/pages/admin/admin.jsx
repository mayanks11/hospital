import React, {useState} from "react";
import axios from "axios";
function Admin(){
    const [entries, setEntries] = useState([]);
    const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email,setEmail] = useState();
  const [speciality, setSpeciality] = useState();
  const[location, setLocation]= useState();
  const[area, setArea]= useState();
    const addDoc = async() => {
        //  e.preventDefault();
         try {
           const res = await axios.post(`http://localhost:4000/api/doctor`,{fName: fName, lName: lName, email: email, speciality: speciality, location: location, area: area})
            console.log(res.data);
            setEntries((prev) => [...prev, res.data]);
            // console.log(entries);
            
    
         } catch (error) {
           console.error(error);
         }
       }
    
    return(
        <div className="admin">
            <h1 className="heading-h1">Register Doctor</h1>
            <form className="top">
                <input onChange={(e)=>setFname(e.target.value)} className = "form-input" type="text" placeholder="First Name" name="fName" />
                <input onChange={(e)=>setLname(e.target.value)} className = "form-input" type="text" placeholder="Last Name" name="lName" />
                <input onChange={(e)=>setEmail(e.target.value)} className = "form-input" type="email" placeholder="Email" name="email" />
                <input onChange={(e)=>setSpeciality(e.target.value)} className = "form-input" type="text" placeholder="Speciality" name="speciality" />
                <input onChange={(e)=>setLocation(e.target.value)} className = "form-input" type="text" placeholder="Location" name="location" />
                <input onChange={(e)=>setArea(e.target.value)} className = "form-input" type="text" placeholder="Area" name="area" />
                <button className = "form-button btn btn-primary" type="submit" onClick={e => {addDoc(e.preventDefault())}}>submit</button>
            </form>

            <div className="footer-reg">
                      <p>Copyright Mayank Srivastava</p>
            </div>
        </div>
    )
}
export default Admin;