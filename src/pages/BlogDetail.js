// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getBlogById } from '../services/api';

// function BlogDetail() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await getBlogById(id);
//         setBlog(response.data);
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       {blog.newsPicture && (
//               <img
//                 src={blog.newsPicture}
//                 alt={blog.title}
//                 style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
//               />
//             )}
//       <p>{blog.description ? blog.description.substring(0, 100) : 'No content available'}...</p> {/* Safely handle undefined content */}
//       <p>Author: {blog.author}</p>
//     </div>
//   );
// }

// export default BlogDetail;


import React, { useEffect, useState } from 'react';
import { getBlogById } from '../services/api';
import { useParams } from 'react-router-dom';
import '../css/BlogDetail.css'; // Create and link your custom CSS

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogById(id);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail-container">
      <h1 className="blog-title">{blog.title}</h1>
      {blog.newsPicture && <img src={blog.newsPicture} alt={blog.title} className="blog-detail-image" />}
      <p className="blog-content">{blog.description}</p>
      <p className="blog-author">Author: {blog.author}</p>
    </div>
  );
}

export default BlogDetail;
