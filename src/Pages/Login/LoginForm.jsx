import { FloatingLabel } from 'flowbite-react';
import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <div>
                <form>
                    <div className='space-y-5'>
                        <div className='grid grid-cols-1 gap-4'>
                            <FloatingLabel variant="outlined" label="Your Email" type="email" />
                            <FloatingLabel variant="outlined" label="Password" type="password" />
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