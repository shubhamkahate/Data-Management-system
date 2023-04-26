
import "./Login.css"
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';



const Login = () => {
  
    let userEmail = useRef();
    let userPassword = useRef();
    
   
    const onLogin = (event) => {
        event.preventDefault();
       
       

        let loginApi = `http://localhost:3002/api/login`;
    
        axios.post(loginApi, {
          email: userEmail.current.value,
          password: userPassword.current.value
        })
        .then(function (response) {
          // handle success
          console.log("response:-",response);
           
          if(response.data.length == 0 ) {
            console.log('username and password not match');
            return Swal.fire({
              icon: "error",
              title: "ERROR!",
              text: "username and password not match",
              showConfirmButton: true,
            });
          } else {
            
            return Swal.fire(
              'Login Successfully!'
            )
          }
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
       

    }
    return (
        <div className="login">
           
            <div className="loginContainer">
                
                <div className="contents" >
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <form className="login" onSubmit={onLogin} >
                            <div className="formInput">
                                <label>Username :</label>
                                  <input className="InputText" type="text" ref={userEmail} name="username" placeholder="Enter Your Email" />
                               
                            </div>
                            <div className="formInput">
                                <label>Password :</label>
                                <input className="Input" type="password" ref={userPassword} name="password" placeholder="Enter password" />
                              
                            </div>
                            <div className="formInput">
                              <input className="loginButton" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default Login;