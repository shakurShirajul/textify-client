import { useQuery } from '@tanstack/react-query';
import Comment from './Comment';
import axios from 'axios';
import CommentBox from './CommentBox';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Comments = ({ blog_id }) => {
    const { user } = useContext(AuthContext);

    const { data: comments, isPending, isLoading, refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/comments/6640380db58363b37966c7a5`);
            return res.data;
        }
    })

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const content = event.target.comment.value;
        axios.post(`http://localhost:5000/comment`, {
            blog_id,
            content,
            commenter_name: user.displayName,
            commenter_email: user.email,
            commenter_image: user.photoURL,
        }, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                refetch();
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    }

    if (isLoading) {
        return <div>Loading in the function......</div>
    }
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
                <CommentBox handleCommentSubmit={handleCommentSubmit} />
            </div>
        </div>
    );
};

export default Comments;