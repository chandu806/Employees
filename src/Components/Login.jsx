import React from "react"
import { AuthContext } from "../Contexts/AuthContext";
export const Login = () => {
  const {login} =React.useContext(AuthContext);
  
  const [formDetails, setFormDetails] = React.useState({
   
    password: "",
    username: "",
  });
  const handleChange = (e) => {
    const {className, value} = e.target
    setFormDetails({
      ...formDetails,
      [className]:value
    });
  }
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(e)
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method:"POST",
      // mode: "no-cors",
      body:JSON.stringify(formDetails),
      headers: {"Content-Type" : "application/json"}
    })
     .then((res) => (res.json()))
     .then((res) => login(res.token))
    //  .then((res) => (setFormDetails(res)))

    //  .catch((err) => (console.log(err)))
  }


  const { password,username } = formDetails;
  




  return (
    
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      
      <label>
        User name:
        <input type="text" placeholder="User name" onChange={handleChange} className="username" value={username}/>
      </label>
      <br/>
      <label>
        Password:
        <input type="password" placeholder="Enter Password" onChange={handleChange} className="password"/>
      </label>
      <br/>
     
     
      <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}






