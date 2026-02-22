import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Optional: npm install jwt-decode to read user info

export default function LoginPage({ setUser }) {
  const handleSuccess = (credentialResponse) => {
    // Decode the Google JWT to get user name/email
    const details = credentialResponse.credential; 
    setUser(details); 
    console.log("Login Successful");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome App</h1>
      <p>Please sign in to continue to Page 2.</p>
      <div style={{ display: 'inline-block' }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log('Login Failed')}
        />
      </div>
    </div>
  );
}