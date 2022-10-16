import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Hooks/firebase.init'


const Login = () => {

    const [signUpForm, setSignUpform] = useState(false);

    const [eyeIcon , setEyeIcon] = useState(false);

    const [showErrorPassword, setShowErrorPassword] = useState('')


    const LoginHandaler = (e)=>{
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            const user = result.user
            console.log(user);
        })
        .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setShowErrorPassword(errorCode.slice(5))
        })

    }
    const signUpFromHandelar = (e)=>{

        e.preventDefault()
        const fName = e.target.fname.value;
        const lName = e.target.lname.value;
        const fullName = fName + ' ' + lName
        const email = e.target.email.value;
        const password = e.target.password.value;


        if(password.length < 6){
            
            setShowErrorPassword('Password Provide must be 6 Character!');
            
        }
        else if(!/(?=.*[A-Z].*[a-z])/.test(password)){
            setShowErrorPassword('Password Provide must be Capital & Small Later!')
        }
        else if(!/(?=.*[!@#$%^&*?])/.test(password)){
            setShowErrorPassword('Password Provide must be 1 Smart Character!')
        }
        else{
            setShowErrorPassword('')
            const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            
          })

          
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setShowErrorPassword(errorCode.slice(5))

          });

          setShowErrorPassword('')
            
        }
        
    }
    
    return (
        <div className='bg-[#F0F2F5] relative'>
            <div className='max-w-[1200px] mx-auto grid gap-20 grid-cols-2 h-screen'>
                <div className='flex justify-center flex-col pb-28'>
                    <img className='w-[300px]' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                    <h2 className='text-3xl pl-6'>Facebook helps you connect and share with the people in your life.</h2>
                </div>

                <div className='w-[400px]  flex-col flex justify-center items-center'>
                    <div className='bg-white w-full p-4 rounded-md shadow-lg'>
                        <div className=''>
                        <form onSubmit={LoginHandaler}>
                        <div>
                            <p className='text-center text-red-500'>{showErrorPassword}</p>
                            </div>
                            <input required className='border w-full my-2 h-[50px] p-3 rounded-lg' type="email" name="email" placeholder='Email Address and Phone Number' />
                            <br />

                            <div className='relative'>
                            <input required className='border w-full my-2 h-[50px] p-3 rounded-lg' type={`${eyeIcon ? 'text' : 'password'}`} name="password" placeholder='Password'/>

                            <div onClick={()=> setEyeIcon(true)} className={` top-5 right-2 cursor-pointer text-gray-500 ${eyeIcon ? 'hidden' : 'absolute'} `}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            </div>


                            <div onClick={()=> setEyeIcon(false)} className={` top-5 right-2 cursor-pointer text-gray-500 ${eyeIcon ? 'absolute' : 'hidden' } `}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>


                            </div>


                            </div>

                           

                            
                            <br />
                            <button type="submit" className='bg-blue-600 text-white font-bold w-full h-[50px] rounded-lg my-3 text-lg'>Log in</button> 
                            </form>
                            <div className='pb-4 text-center border-b-2'>
                            <p className='text-blue-600'>Forgotten password?</p>
                            </div>
                            <div className='text-center'>
                                <button onClick={()=> setSignUpform(true)} className='bg-green-600 text-white font-bold px-8 h-[50px] rounded-lg my-3 text-lg'>Create New Account</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center my-3'>
                        <p className='p-4'><strong>Create a Page</strong> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>


        <form onSubmit={signUpFromHandelar} className={` ${!signUpForm ? 'hidden' : 'absolute'} top-[10%] left-[35%] w-[450px] bg-white  rounded-lg shadow-lg p-3`}>
            <div className='pb-3 border-b-2 border-gray-500  '>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-4xl font-bold'>Sign Up</h2>
                        <span onClick={()=> setSignUpform(false)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </span>
                        </div>
                        <p>It's quick and easy.</p>
                    </div>

            <div className='mt-2 '>
                    <div>
                    <input className='w-[49%] bg-gray-100 p-2 rounded-lg border border-gray-300' type="text" name="fname" placeholder='First name' id="" required />
                    <input required className='w-[49%] bg-gray-100 p-2 rounded-lg border border-gray-300 ml-2' type="text" name="lname" placeholder='Surename' id="" />
                    <input required className='w-[100%] bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2' type="email" name='email'  placeholder='Enter your Email Address' />

                    <div className='relative'>
                    <input required className='w-[100%] bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2' type={`${eyeIcon ? 'text' : 'password'}`} placeholder='New Password' name='password' />

                    <div onClick={()=> setEyeIcon(true)} className={` top-5 right-2 cursor-pointer text-gray-500 ${eyeIcon ? 'hidden' : 'absolute'} `}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            </div>


                            <div onClick={()=> setEyeIcon(false)} className={` top-5 right-2 cursor-pointer text-gray-500 ${eyeIcon ? 'absolute' : 'hidden' } `}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>


                            </div>


                    </div>

                    </div>

                    <div>
                        <div className='w-[100%] mt-1'>
                            <p><small>Date of Birth</small></p>
                            <input required className='border w-[31%] border-gray-300 bg-white rounded-lg  mr-1 p-2' placeholder='Date' type="text" name="" id="" />
                            <input required className='p-2 border w-[31%] border-gray-300 rounded-lg  mx-1' type="text" placeholder='Month' name="" id="" />
                            <input required className='p-2 rounded-md border w-[31%] border-gray-300  mx-1' type="text" placeholder='Year' name="" id="" />
                        </div>
                        <div className='w-[100%] mt-1'>
                            <p><small>Date of Birth</small></p>

                            <div className='flex'>
                                <div className='p-1 rounded-lg flex justify-between items-center px-4 border w-[31%] border-gray-300  mr-1'>
                                    <label htmlFor="">Female</label>
                                    <input type="radio" value="Male" name="gender" /> 
                                </div>

                                <div className='p-1 mx-1 rounded-lg flex justify-between items-center px-4 border w-[31%] border-gray-300  mr-1'>
                                    <label htmlFor="">Male</label>
                                    <input required type="radio" value="Male" name="gender" /> 
                                </div>

                                <div className='p-1 rounded-lg flex justify-between items-center px-4 border w-[31%] border-gray-300  ml-1'>
                                    <label htmlFor="">Other</label>
                                    <input required type="radio" value="Male" name="gender" /> 
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className=' text-gray-400'><small>People who use our service may have uploaded your contact information to Facebook. Learn more.</small></p>
                            <p className=' text-gray-400'>
                                <small>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</small>
                            </p>
                        </div>


                        <div>
                            <p className='text-center text-red-500'>{showErrorPassword}</p>
                        </div>
                        <div className='text-center'>
                                <button className='bg-green-600 text-white font-bold px-10 p-1 rounded-lg my-3 text-lg'>Sign Up</button>
                            </div>
                    </div>
                </div>
        </form>
        </div>
    );
};

export default Login;