import { FloatingLabel } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const LoginForm = ({ navigateToPage}) => {
    const { signIn, successToast, errorToast } = useContext(AuthContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then((userCredential) => {
                successToast("Login Successful");
                navigateToPage();
            })
            .catch((error) => {
                errorToast('You have entered an invalid username or password');
                console.log(error.code, error.message);
            })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div className='space-y-5'>
                        <div className='grid grid-cols-1 gap-4'>
                            <FloatingLabel variant="outlined" label="Your Email" type="email" name="email" />
                            <FloatingLabel variant="outlined" label="Password" type="password" name="password" />
                        </div>
                        <div>
                            <input type="submit" value="Create Account" className="bg-[#20DC49] w-full py-3 rounded-md text-white" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;