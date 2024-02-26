import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';




const SignUp = () => {
    const history = useNavigate();
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    });

    let name, value;
    const handleInputs = (e)=>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (e) =>{
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;

        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name, email, phone, password, cpassword
            })
        });

        const data = await res.json();
        if(!data || data.status === 422 ){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration sucessfull");
            console.log("Registration sucessfull");
            // useNavigate("./login");
        }
    }


    return (
        <>
            <section className='signup'>
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method='POST' className='register-form' id="register-form">
                                <div className="form-group">
                                    {/* <label htmlFor="name"></label> */}
                                    <input type="text" name="name" id="name" autoComplete='off'
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder='Your Name' />
                                </div>

                                <div className="form-group">
                                    {/* <label htmlFor="name"></label> */}
                                    <input type="text" name="email" id="email" autoComplete='off'
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder='Your email' />
                                </div>

                                <div className="form-group">
                                    {/* <label htmlFor="name"></label> */}
                                    <input type="text" name="phone" id="phone" autoComplete='off'
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder='Your phone' />
                                </div>

                                <div className="form-group">
                                    {/* <label htmlFor="name"></label> */}
                                    <input type="password" name="password" id="password" autoComplete='off'
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder='password' />
                                </div>

                                <div className="form-group">
                                    {/* <label htmlFor="name"></label> */}
                                    <input type="password" name="cpassword" id="cpassword" autoComplete='off'
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    placeholder='confirm password' />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className='form-submit' value="register" onClick={PostData} />
                                </div>

                                <div className="signup-image">
                                    <NavLink to="/LogIn" className="signup-image-link">I am already register</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default SignUp
