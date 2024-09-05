import React from 'react';
import { Link } from 'react-router-dom';
import './css/BlogCard.css'; // Create and link your custom CSS

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="blog-image" />}
      <div className="blog-content">
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-excerpt">{blog.content ? blog.content.substring(0, 100) : 'No content available'}...</p>
        <p className="blog-author">Author: {blog.author}</p>
        <Link to={`/blogs/${blog.id}`} className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
}

export default BlogCard;
