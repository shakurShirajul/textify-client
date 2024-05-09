import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div>
            <div className="font-inter container mx-auto md:my-10">
                <div className='md:w-[70%] rounded-3xl mx-auto bg-contain bg-no-repeat shadow-xl' style={{ backgroundImage: 'url(https://i.postimg.cc/yxdjF4k1/register-Image.jpg)' }}>
                    <div className="md:flex md:justify-between">
                        <div className="hidden lg:flex items-center md:w-[55%]">
                            <div className="p-10 text-white font-medium">
                                {/*  */}
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%]">
                            <div className="bg-white p-10 md:rounded-3xl shadow-xl">
                                <div className="mb-9">
                                    <h1 className="font-grotsk text-5xl font-medium">Welcome <span className="text-[#20DC49]">Back!</span></h1>
                                </div>
                                <div className='space-y-5 mb-5'>
                                    <div>
                                        <div className="flex justify-center gap-5 cursor-pointer">
                                            <button
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
                                <LoginForm></LoginForm>
                                <div>
                                    <p className="text-sm mt-2 text-center">Have an account? <Link to="/signin" className="text-[#20DC49]">Log In</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;