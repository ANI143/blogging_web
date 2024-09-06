// import React, { useState } from 'react';


// function Register() {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await registerUser({ username, email, password });
//       console.log('Registration success:', response.data);
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       setError(error.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       {error && <p style={{color: 'red'}}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label><br/>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label><br/>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label><br/>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import '../css/Auth.css'; // Create and link your custom CSS


function Register() {
  const [username, setUsername] = useState('');
  const [mobilenumber, setMobilnumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, mobilenumber, email, password });
      console.log('Registration success:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h1 className="page-title">Register</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>User Name</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Mobile Number</label>
        <input type="text" value={mobilenumber} onChange={(e) => setMobilnumber(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit" className="auth-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
