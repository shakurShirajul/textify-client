import React from 'react';
import Counter from './Counter';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Counters = () => {
    const { data: stats = [], isPendig } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axios.get(`https://textify-black.vercel.app/stats`,{
                withCredentials: true
            });
            return res.data;
        }
    })
    return (
        <div className='max-w-5xl mx-auto'>
            <Counter stats={stats}/>
        </div>
    );
};

export default Counters;