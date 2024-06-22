// Added post-card classs to add css to post
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList1 } from "../store/posts-list";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList1);
  return (
    <div className="card post-card">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span className="badge bg-primary card-tags" key={tag}>
            {tag}
          </span>
        ))}

        {/* delete icon  */}
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black card-delete"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>

        <div className="alert alert-success card-reactions" role="alert">
          Your post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};
export default Post;
