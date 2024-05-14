import { FloatingLabel } from "flowbite-react";
import { ToastContainer } from "react-toastify";

const SignupForm = ({handleSignUpForm}) => {
    return (
        <div>
            <div>
                <form onSubmit={handleSignUpForm}>
                    <div className='grid grid-cols-1 gap-4'>
                        <FloatingLabel variant="outlined" name="name" label="Your Name" type="text" />
                        <FloatingLabel variant="outlined" name="email" label="Your Email" type="email" />
                        <FloatingLabel variant="outlined" name="url" label="Photo URL" type="url" />
                        <FloatingLabel variant="outlined" name="password" label="Password" type="password" />
                    </div>
                    <div>
                        <input type="submit" value="Create Account" className="bg-[#20DC49] w-full py-3 rounded-md text-white"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;