import { QueryClient, useQuery } from "@tanstack/react-query";
import Comment from "./Comment";
import axios from "axios";
import CommentBox from "./CommentBox";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Comments = ({ blog_id, author_email }) => {
  const { user } = useContext(AuthContext);

  let checkEmail = true;

  const {
    data: comments,
    isPending,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axios.get(
        `https://textify-black.vercel.app/comments/${blog_id}?email=${user.email}`,
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return res.data;
    },
  });

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const content = event.target.comment.value;
    axios
      .post(
        `https://textify-black.vercel.app/comment?email=${user.email}`,
        {
          blog_id,
          content,
          commenter_name: user.displayName,
          commenter_email: user.email,
          commenter_image: user.photoURL,
        },
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        refetch();
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
    event.target.reset();
  };
  return (
    <div>
      {isPending && <h1>Comments Loading...</h1>}
      <div className="space-y-2">
        {comments?.map((comment) => (
          <Comment comment={comment} />
        ))}
        {author_email === user?.email ? (
          <></>
        ) : (
          <CommentBox handleCommentSubmit={handleCommentSubmit} />
        )}
      </div>
    </div>
  );
};

export default Comments;
