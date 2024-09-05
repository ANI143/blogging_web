// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createBlog } from '../services/api';

// function CreateBlog() {
//   const [title, setTitle] = useState('');
//   const [description, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [newsPicture, setImage] = useState(null); // State to handle the image file
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a new FormData object
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('author', author);
//     if (newsPicture) {
//       formData.append('newsPicture', newsPicture); // Append the image file
//     }

//     try {
//       const response = await createBlog(formData); // Pass FormData to API call
//       console.log('Blog created:', response.data);
//       navigate('/');
//     } catch (error) {
//       console.error('Error creating blog:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Blog</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Content:
//           <textarea
//             value={description}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Author:
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Image:
//           <input
//             type="file"
//             onChange={handleImageChange}
//             accept="newsPicture/*"
//           />
//         </label>
//         <button type="submit">Create Blog</button>
//       </form>
//     </div>
//   );
// }

// export default CreateBlog;


import React, { useState } from 'react';
import '../css/BlogCreate.css'; // Create and link your custom CSS
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../services/api';
function CreateBlog() {
  const [title, setTitle] = useState('');
  const [description, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [newsPicture, setImage] = useState(null); // State to handle the image file
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author', author);
    if (newsPicture) {
      formData.append('newsPicture', newsPicture); // Append the image file
    }

    try {
      const response = await createBlog(formData); // Pass FormData to API call
      console.log('Blog created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="blog-create-container">
      <h1 className="page-title">Create Blog</h1>
      <form onSubmit={handleSubmit} className="blog-create-form">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Content</label>
        <textarea value={description} onChange={(e) => setContent(e.target.value)} required />

        <label>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label>Image</label>
        <input type="file" onChange={handleImageChange} accept="image/*" />

        <button type="submit" className="blog-create-btn">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
