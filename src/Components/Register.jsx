import React from "react"

export const Register = () => {
  
  const [formDetails, setFormDetails] = React.useState({
    name : "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
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
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method:"POST",
      mode: "no-cors",
      body:JSON.stringify(formDetails),
      headers: {"Content-Type" : "application/json"}
    })
     .then((res) => (res.json()))
     .then((res) => (setFormDetails(res)))

     .catch((err) => (console.log(err)))
  }


  const {name,email,password,username,mobile,description} = formDetails;
  




  return (
    
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Register Page</h1>
      <label>
        Name:
        <input type="text" placeholder="Enter name" onChange={handleChange} className="name"/>
      </label>
      <br/>
      <label>
        Email :
      <input type ="text" placeholder="Enter Email"
      value={email}
      onChange={handleChange}
      className="email"
      />

      </label>
      <br/>
      <label>
        Password:
        <input type="password" placeholder="Enter Password" onChange={handleChange} className="password"/>
      </label>
      <br/>
      <label>
        User name:
        <input type="text" placeholder="User name" onChange={handleChange} className="username"/>
      </label>
      <br/>
      <label>
        Mobile:
        <input type="text" placeholder="Enter Mobile" onChange={handleChange} className="mobile"/>
      </label>
      <br/>
      <label>
        Description:
        <input type="text" placeholder="Enter name" onChange={handleChange} className="description"/>
      </label>

      <br/>
      <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}