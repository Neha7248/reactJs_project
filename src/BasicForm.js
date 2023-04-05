import { useState } from "react";

function Login() {
  let [emailid, setEmailiId] = useState("");
  let [password, setPassword] = useState("");

  function changeVaue(event) {
    //console.log("event fired")
    //console.log(event);
    let name = event.target.name; // tag name attribute
    let value = event.target.value; // tag value attibute
    //console.log(name+" "+value);
    if (name == "emailid") {
      setEmailiId(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  }
  function submitValue(event) {
    event.preventDefault();
    console.log("value submitted");
    if (emailid == "neha@gmail.com" && password == "12345") {
      alert("successfully login");
    } else {
      alert("failure try once again");
    }
  }
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={submitValue}>
        <label>EmailId</label>
        <input type="emailid" name="emailid" onChange={changeVaue} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={changeVaue} />
        <br />
        <input type="submit" value="submit" />
        <input type="reset" value="reset" />
      </form>

      
    </div>
  );
}

export default Login;








// import React, { useState } from "react";

// const BasicForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [allEntry, setAllEntry] = useState([]);
//   const submitForm ={} => {
//     const newEntry = [email]

//   }

//   return (
//     <>
//       <form action="" onSubmit= {submitForm}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             autoComplete="off"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="text"
//             name="password"
//             id="email"
//             autoComplete="off"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>

//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// };
// export default BasicForm;
