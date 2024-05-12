import { useQuery } from '@tanstack/react-query';
import Comment from './Comment';
import axios from 'axios';

const Comments = ({ blog_id }) => {
    console.log("Blog_ID :", blog_id)
    const { data: comments, isPending } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/comments/6640380db58363b37966c7a5`);
            return res.data;
        }
    })
    // console.log("this is comments", comments);
    return (
        <div>
            {
                isPending &&
                <h1>Comments Loading...</h1>
            }
            <div className='space-y-2'>
                {
                    comments?.map(comment =>
                        <Comment comment={comment} />
                    )
                }
            </div>
        </div>
    );
};

export default Comments;