import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/api';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // Create and link your custom CSS

// function Home() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await getBlogs();
//         setBlogs(response.data);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="home-container">
//       <h1 className="page-title">Blog List</h1>
//       <div className="blog-grid">
//         {blogs.map((blog) => (
//           <div className="blog-card" key={blog._id}>
//             {blog.newsPicture && <img src={blog.newsPicture} alt={blog.title} className="blog-image" />}
//             <div className="blog-content">
//               <h2 className="blog-title">{blog.title}</h2>
//               <p className="blog-excerpt">{blog.description ? blog.description.substring(0, 100) : 'No content available'}...</p>
//               <p className="blog-author">Author: {blog.author}</p>
//               <Link to={`/blogs/${blog._id}`} className="read-more-btn">Read More</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { getBlogs } from '../services/api';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Make sure to include your CSS
import { useAuth } from '../pages/AuthContext'; 

function Home() {
  const [blogs, setBlogs] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status

  const { isLoggedIn, login, logout } = useAuth(); // Use login, logout from context
  const [loading, setLoading] = useState(false); // To manage loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout(); // This will set isLoggedIn to false
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(); // This will set isLoggedIn to true
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
        <div className="auth-menu">
        {isLoggedIn ? (
          <>
            {/* Display loading spinner on logout */}
            <button onClick={handleLogout} className="auth-btn" disabled={loading}>
              {loading ? 'Logging out...' : 'Logout'}
            </button>
            <Link to="/create" className="auth-btn">Create Blog</Link>
          </>
        ) : (
          <>
           <button onClick={handleLogin} className="auth-btn" disabled={loading}>
              {loading ? 'Logging in...' :  <Link to="/login" className="auth-btn">Login</Link>}
             
            </button>
            
            <Link to="/register" className="auth-btn">Register</Link>
          </>
        )}
      </div>
      <h1 className="page-title">Blog List</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
            {blog.newsPicture && <img src={blog.newsPicture} alt={blog.title} className="blog-image" />}
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.description ? blog.description.substring(0, 100) : 'No content available'}...</p>
              <p className="blog-author">Author: {blog.author}</p>
              <Link to={`/blogs/${blog._id}`} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
