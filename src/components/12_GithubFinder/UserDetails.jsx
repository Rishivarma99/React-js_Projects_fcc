const UserDetails = ({ user }) => {
  console.log(user);
  return (
    <div className="gf-user-main">
      <div className="gf-image-div">
        <img src={user.avatar_url} alt="user-image" className="gf-user-image" />
      </div>
      <div className="gf-user-details">
        <p className="gf-user-name">
          {" "}
          <span className="user-span">Name : </span>
          {user.name}
        </p>

        <p className="gf-user-link">
          {" "}
          <span className="user-span">Profile Link: </span>
          <a href={user.html_url} target="_blank">
            {user.login}
          </a>
        </p>
        <p className="gf-user-followers">
          {" "}
          <span className="user-span">Followers : </span>
          {user.followers}
        </p>
        <p className="gf-user-following">
          {" "}
          <span className="user-span">Following : </span>
          {user.following}
        </p>
        <p className="gf-user-repos">
          {" "}
          <span className="user-span">Public Repos : </span>
          {user.public_repos}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
