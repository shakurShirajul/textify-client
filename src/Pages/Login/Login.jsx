import React, { useContext } from 'react';
import LoginForm from './LoginForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const { googleSignIn, successToast, errorToast } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const navigateToPage = () => {
        setTimeout(() => {
            navigate(location?.state ? location.state : "/");
        }, 2000);
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                axios.post(`https://textify-black.vercel.app/setauthor`, {
                    email: result.user.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                }, { withCredentials: true })
                successToast('LOGIN SUCCESSFUL')
                navigateToPage();

            })
            .catch((error) => {
                errorToast(error.message)
                console.log('Error', error.message);
            })
    }
    return (
        <div>
            <div className="font-inter container mx-auto md:my-10">
                <div className='md:w-[70%] rounded-3xl mx-auto bg-contain bg-no-repeat lg:shadow-xl' style={{ backgroundImage: 'url(https://i.postimg.cc/yxdjF4k1/register-Image.jpg)' }}>
                    <div className="md:flex md:justify-between">
                        <div className="hidden lg:flex items-center md:w-[55%]">
                            <div className="p-10 text-white font-medium">
                                {/*  */}
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%]">
                            <div className="bg-white p-10 md:rounded-3xl lg:shadow-xl">
                                <div className="mb-9">
                                    <h1 className="font-grotsk text-5xl font-medium">Welcome <span className="text-[#20DC49]">Back!</span></h1>
                                </div>
                                <div className='space-y-5 mb-5'>
                                    <div>
                                        <div className="flex justify-center gap-5 cursor-pointer">
                                            <button
                                                onClick={handleGoogleSignIn}
                                                className='border border-[#20DC49] rounded-lg w-full flex justify-center py-2'>
                                                <div className='flex items-center gap-2'>
                                                    <FcGoogle className="w-[32px] h-[32px]" />
                                                    <span>Continue with Google</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-3'>
                                            <hr className='flex-1' />
                                            <p>Or</p>
                                            <hr className='flex-1' />
                                        </div>
                                    </div>
                                </div>
                                <LoginForm navigateToPage={navigateToPage}></LoginForm>
                                <div>
                                    <p className="text-sm mt-2 text-center">Create Account <Link to="/signup" className="text-[#20DC49]">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;