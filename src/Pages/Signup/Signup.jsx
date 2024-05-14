import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProviders';
import axios from 'axios';
const Signup = () => {
    const { user, signUp, successToast, updateUser, errorToast } = useContext(AuthContext);

    const navigate = useNavigate();

    const navigateToHomePage = () => {
        setTimeout(() => {
            navigate("/");
            location.reload();
        }, 2000)
    }

    const handleSignUpForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        const checkCapital = /[A-z]/;
        const checkSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        const checkNumeric = /\d/;

        const hasCapital = checkCapital.test(password);
        const hasSpecialChar = checkSpecialChar.test(password);
        const hasNumeric = checkNumeric.test(password);
        const isLengthValid = password.length >= 6;

        if (!hasCapital) {
            errorToast('Password must contain at least one uppercase letter.');
        }
        if (!hasSpecialChar) {
            errorToast('Password must contain at least one Special character.');
        }
        if (!hasNumeric) {
            errorToast('Password must be at least one Numeric character.');
        }
        if (!isLengthValid) {
            errorToast('Password must be at least 6 characters long.');
        }

        if (hasCapital && hasSpecialChar && hasNumeric && isLengthValid) {
            console.log(name, email, url, password);
            signUp(email, password)
                .then((userCredential) => {
                    updateUser(name, url)
                        .then(() => {
                            axios.post(`https://textify-black.vercel.app/setauthor`, {
                                name,
                                email,
                                photo: url
                            }, { withCredentials: true })
                            successToast('Registration Successful')
                            console.log(url);
                            event.target.reset();
                            navigateToHomePage();
                        }).catch((error) => {
                            errorToast(error.message)
                        })
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    errorToast(error.message)
                })
        }

    }
    return (
        <div>
            <div className="font-inter container mx-auto md:my-10">
                <div className='md:w-[70%] rounded-3xl mx-auto bg-containe bg-center bg-no-repeat lg:shadow-xl' style={{ backgroundImage: 'url(https://i.postimg.cc/yxdjF4k1/register-Image.jpg)' }}>
                    <div className="md:flex md:justify-between">
                        <div className="hidden lg:flex items-center md:w-[55%]">
                            <div className="p-10 text-white font-medium">
                                <h1 className="text-4xl md:text-8xl">
                                    {/* Unleash your creativity! */}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%]">
                            <div className="bg-white p-10 md:rounded-3xl lg:shadow-xl">
                                <div className="mb-9">
                                    <h1 className="font-grotsk text-5xl font-medium">Get Started With<span className="text-[#20DC49]">Textify</span></h1>
                                </div>
                                <SignupForm handleSignUpForm={handleSignUpForm}></SignupForm>
                                <div>
                                    <p className="text-sm mt-2 text-center">Have an account? <Link to="/login" className="text-[#20DC49]">Log In</Link></p>
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

export default Signup;