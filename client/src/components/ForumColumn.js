function ForumColumn({ forum, className }) {
  return (
    <div className={`forum-column ${className}`}>
      {forum.map((forumpost) => {
        return (
          <div className="forum-post" key={forumpost._id}>
            <div className="post-header">
              <img src={forumpost.album_art} alt={forumpost.title} />
              <div className="post-header-text">
                <p>
                  <span className="username">{forumpost.poster_name}</span> has listened to {forumpost.title} by {forumpost.artist}
                </p>
              </div>
            </div>
            <div className="post-body">
              <p>"{forumpost.forum_post}"</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ForumColumn;
