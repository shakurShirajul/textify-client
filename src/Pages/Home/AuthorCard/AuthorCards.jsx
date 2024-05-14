import { useQuery } from "@tanstack/react-query";
import AuthorCard from "./AuthorCard";
import axios from "axios";
import { useState } from "react";

const AuthorCards = () => {

    const [authorsData, setAuthorsData] = useState([])
    const { data: author, isPending } = useQuery({
        queryKey: ['authorsData'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/authors', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAuthorsData(res.data);
            return res.data;
        }
    })

    if (isPending) {
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    return (
        <div className="mt-10">
            <h1 className="text-center font-grotsk text-4xl font-semibold">Top Three Content Writer</h1>
            <div className="mx-5 md:mx-0 mt-10">
                <div className="grid gap-5 h-[600px] md:grid-cols-3  max-w-7xl mx-auto  md:h-[200px] flex-wrap">
                    {
                        authorsData.map(authorData =>
                            <AuthorCard authorData={authorData} />
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default AuthorCards;