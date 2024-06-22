// In use reducer we can also give context

import { createContext, useReducer } from "react";

// we can also create like this

export const PostList1 = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducerFunction = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "delete") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "ADD_POST") {
    newPostList = [
      ...currentPostList,
      {
        id: action.object.userId,
        title: action.object.title,
        body: action.object.body,
        reactions: action.object.reactions,
        userId: action.object.userId,
        tags: action.object.tags,
      },
    ];
  }

  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    reducerFunction,
    DEFAULT_POST_LIST
  );
  // const contentValue = {
  //   postList,
  //   addPost,
  //   deletePost,
  // };

  const addPost = (object) => {
    console.log(object);
    const actionObject = {
      type: "ADD_POST",
      object,
    };
    dispatchPostList(actionObject);
  };

  const deletePost = (postId) => {
    let actionObject = {
      type: "delete",
      payload: {
        postId: postId,
      },
    };
    dispatchPostList(actionObject);
  };
  return (
    // the value must be always be given as a object
    <PostList1.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList1.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends , i am going to Mumbai for my vacation",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "Going to chennai",
    body: "Hi friends ,i am going to chennai for my vacation",
    reactions: 4,
    userId: "user-10",
    tags: ["vacation", "chennai", "enjoy"],
  },
];

export default PostListProvider;
