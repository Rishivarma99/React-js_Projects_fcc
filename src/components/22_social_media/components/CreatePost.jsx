// used textarea tag
// used use ref for getting input elements
// use date.now() for unique id

import { useContext, useRef } from "react";
import { PostList1 } from "../store/posts-list";

const CreatePost = () => {
  const { addPost } = useContext(PostList1);

  const userId = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // not to send to backend or server

    const tags1 = tags.current.value;
    const tagsArray = tags1.split(" ");

    const obj = {
      userId: userId.current.value,
      title: title.current.value,
      body: body.current.value,
      reactions: reactions.current.value,
      tags: tagsArray,
    };

    addPost(obj);
    userId.current.value = "";
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };

  return (
    <form action="submit" className="create-post" onSubmit={handleSubmit}>
      {/* user id  */}
      <div className="mb-3">
        <label forhtml="userId" className="form-label">
          Enter User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter user id "
          ref={userId}
        />
      </div>

      {/* post title  */}
      <div className="mb-3">
        <label forhtml="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Give title"
          ref={title}
        />
      </div>
      <div className="mb-3">
        <label forhtml="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Give body"
          ref={body}
        />
      </div>

      <div className="mb-3">
        <label forhtml="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this story"
          ref={reactions}
        />
      </div>

      <div className="mb-3">
        <label forhtml="tags" className="form-label">
          Enter your HashTags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags with space"
          ref={tags}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
