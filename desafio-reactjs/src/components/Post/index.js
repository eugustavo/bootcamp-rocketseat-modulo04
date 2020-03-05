import React from 'react';

import './styles.css';

export default function Post({ post }) {
  return (
    <li className="post">
      <div className="header">
        <img src={post.author.avatar} alt="Author avatar" />
        <div className="author">
          <strong>{post.author.name}</strong>
          <p>{post.date}</p>
        </div>
      </div>

      <div className="content">
        <p>{post.content}</p>
      </div>

      <div className="comments">
        <ul>
          {post.comments.map(comment => (
            <li>
              <div className="comment">
                <div className="comment-avatar">
                  <img src={comment.author.avatar} alt="Avatar"/>
                </div>

                <div className="comment-content">
                  <strong>{comment.author.name}</strong>
                  <p>{comment.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
