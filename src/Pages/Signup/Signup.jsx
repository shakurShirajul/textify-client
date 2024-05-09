import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import image1 from '../../assets/images/registerPage.jpg'
import { Link } from 'react-router-dom';
import { FloatingLabel } from 'flowbite-react';
import SignupForm from './SignupForm';
const Signup = () => {
    return (
        <div>
            <div className="font-inter container mx-auto md:my-10">
                <div className='md:w-[70%] rounded-3xl mx-auto bg-containe bg-center bg-no-repeat shadow-xl' style={{ backgroundImage: 'url(https://i.postimg.cc/yxdjF4k1/register-Image.jpg)' }}>
                    <div className="md:flex md:justify-between">
                        <div className="hidden lg:flex items-center md:w-[55%]">
                            <div className="p-10 text-white font-medium">
                                <h1 className="text-4xl md:text-8xl">
                                    {/* Unleash your creativity! */}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%]">
                            <div className="bg-white p-10 md:rounded-3xl shadow-xl">
                                <div className="mb-9">
                                    <h1 className="font-grotsk text-5xl font-medium">Get Started With<span className="text-[#20DC49]">Textify</span></h1>
                                </div>
                                <SignupForm></SignupForm>
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

export default Signup;