import { useCallback, useContext } from "react";
import Post from "./Post";
import { PostList1 } from "../store/posts-list";

const PostList = () => {
  const { postList } = useContext(PostList1);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} /> // this is just a return statement so no need {}
      ))}
    </>
  );
};

export default PostList;
