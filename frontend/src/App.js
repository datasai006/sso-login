
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/auth/user')
//       .then(res => setUser(res.data))
//       .catch(() => setUser(null));
//   }, []);

//   const handleLogin = () => {
//     window.location.href = 'http://localhost:5000/auth/login';
//   };

//   const handleLogout = () => {
//     window.location.href = 'http://localhost:5000/auth/logout';
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: 50 }}>
//       <h1>Azure AD SSO Login</h1>
//       {!user ? (
//         <button onClick={handleLogin}>Login with Microsoft</button>
//       ) : (
//         <div>
//           <p>Welcome, {user.displayName}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Original component with inline CSS
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real axios call to your authentication endpoint
    axios.get('http://localhost:5000/auth/user')
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/login';
  };

  const handleLogout = () => {
    window.location.href = 'http://localhost:5000/auth/logout';
  };

  // CSS styles defined inline
  const styles = {
    container: {
      display: 'flex',
      minHeight: '92vh',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'linear-gradient(to bottom right, #f0f4ff, #e0e8ff)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    header: {
      padding: '24px',
      background: 'linear-gradient(to right, #0062cc, #4361ee)',
      color: 'white',
      textAlign: 'center'
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '12px'
    },
    logoCircle: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '12px',
      borderRadius: '50%',
      backdropFilter: 'blur(4px)'
    },
    title: {
      margin: '0',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    subtitle: {
      color: '#ccdcff',
      marginTop: '4px',
      fontSize: '14px'
    },
    contentArea: {
      padding: '32px'
    },
    loadingContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 0'
    },
    spinner: {
      height: '40px',
      width: '40px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #0062cc',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    loadingText: {
      marginTop: '16px',
      color: '#666'
    },
    welcomeContainer: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    welcomeTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#333',
      margin: '0'
    },
    welcomeDescription: {
      color: '#666',
      marginTop: '8px'
    },
    button: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    buttonHover: {
      background: '#f5f5f5'
    },
    terms: {
      textAlign: 'center',
      fontSize: '12px',
      color: '#666',
      marginTop: '32px'
    },
    userContainer: {
      textAlign: 'center'
    },
    avatar: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80px',
      width: '80px',
      borderRadius: '50%',
      background: '#e6f0ff',
      color: '#0062cc',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px'
    },
    userName: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#333',
      margin: '0'
    },
    userEmail: {
      fontSize: '14px',
      color: '#666',
      marginTop: '4px'
    },
    logoutButton: {
      background: '#0062cc',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 24px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '24px'
    },
    logoutButtonHover: {
      background: '#004999'
    },
    footer: {
      borderTop: '1px solid #eee',
      padding: '16px',
      textAlign: 'center',
      background: '#f9fafb'
    },
    footerText: {
      fontSize: '12px',
      color: '#666',
      margin: '0'
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logoContainer}>
            <div style={styles.logoCircle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 4L21 9L12 14L3 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V16.5C7 17.163 7.26339 17.7989 7.73223 18.2678C8.20107 18.7366 8.83696 19 9.5 19H14.5C15.163 19 15.7989 18.7366 16.2678 18.2678C16.7366 17.7989 17 17.163 17 16.5V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <h1 style={styles.title}>Kreat Ai Portal</h1>
          <p style={styles.subtitle}>Secure Sign-in with SSO</p>
        </div>

        <div style={styles.contentArea}>
          {loading ? (
            <div style={styles.loadingContainer}>
              <div style={{
                ...styles.spinner,
                animation: 'spin 1s linear infinite'
              }}></div>
              <p style={styles.loadingText}>One moment please...</p>
            </div>
          ) : !user ? (
            <div>
              <div style={styles.welcomeContainer}>
                <h2 style={styles.welcomeTitle}>Welcome Back</h2>
                <p style={styles.welcomeDescription}>Sign in with your Microsoft account to continue</p>
              </div>

              <button
                style={styles.button}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
                onClick={handleLogin}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 23">
                  <path fill="#f3f3f3" d="M0 0h23v23H0z"></path>
                  <path fill="#f35325" d="M1 1h10v10H1z"></path>
                  <path fill="#81bc06" d="M12 1h10v10H12z"></path>
                  <path fill="#05a6f0" d="M1 12h10v10H1z"></path>
                  <path fill="#ffba08" d="M12 12h10v10H12z"></path>
                </svg>
                Login with SSO
              </button>

              <div style={styles.terms}>
                <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
              </div>
            </div>
          ) : (
            <div style={styles.userContainer}>
              <div style={styles.avatar}>
                {user.displayName.split(' ').map(n => n[0]).join('')}
              </div>

              <h2 style={styles.userName}>Welcome, {user.displayName}</h2>
              <p style={styles.userEmail}>{user.email}</p>

              <button
                style={styles.logoutButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#004999';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0062cc';
                }}
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default App;