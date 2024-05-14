import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AuthorCard = ({ authorData }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }
    console.log("Hi Shirajul ", authorData);
    return (
        <div className='w-[100%]'>
            <div className="flex items-center justify-center text-black cursor-pointer w-full">
                <div
                    className="flip-card rounded-md w-full"
                    onClick={handleFlip}
                >
                    <motion.div
                        className="flip-card-inner w-[100%] h-[100%]"
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{ duration: 0.6, animationDirection: "normal" }}
                        onAnimationComplete={() => setIsAnimating(false)}
                    >
                        <div className="flip-card-front bg-white rounded-lg p-3 w-full">
                            <div class=" bg-whiterounded-lg space-y-2">
                                <div className='flex justify-center'>
                                    <img className="w-20 h-20 rounded-full" src={authorData?.user_image} alt="Rounded avatar"></img>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 text-center">
                                    <span className='font-semibold'>Author Name:</span> {authorData.user_name}
                                    <p className='font-semibold'>Total Published Blog: {authorData?.number_of_blog}</p>
                                </p>
                              
                            </div>

                        </div>

                        <div className="flip-card-back bg-white rounded-lg p-2 w-full">
                            <div class="rounded-lg space-y-2">
                                <div className='flex justify-center'>
                                    <img  alt="" className='rounded-full' />
                                    <img className="w-20 h-20 rounded-full" src={authorData?.user_image} alt="Rounded avatar"></img>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 text-center">
                                    <span className='font-semibold'>Author Name:</span> {authorData.user_name}
                                    <p className='font-semibold'>Total Published Blog: {authorData?.number_of_blog}</p>
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;