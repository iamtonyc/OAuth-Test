import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';

// Configure allowed users via Vite env vars (comma-separated)
// VITE_ALLOWED_EMAILS=alice@example.com,bob@example.com
// VITE_ALLOWED_DOMAINS=example.com,mycompany.com

export default function LoginPage({ setUser }) {
  const [error, setError] = useState(null);

  const parseEnvList = (v) => (v || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  const allowedEmails = parseEnvList(import.meta.env.VITE_ALLOWED_EMAILS);
  const allowedDomains = parseEnvList(import.meta.env.VITE_ALLOWED_DOMAINS);

  const isAllowed = (email) => {
    if (!email) return false;
    const e = email.toLowerCase();
    if (allowedEmails.includes(e)) return true;
    const domain = e.split('@')[1] || '';
    if (allowedDomains.includes(domain)) return true;
    return false;
  };

  const handleSuccess = (credentialResponse) => {
    setError(null);
    try {
      const token = credentialResponse?.credential;
      if (!token) throw new Error('No credential returned');
      const profile = jwtDecode(token);
      const email = profile?.email;
      if (!isAllowed(email)) {
        setError('This account is not authorized to access the app.');
        return;
      }

      // Pass minimal user info to app state
      setUser({
        email,
        name: profile?.name,
        picture: profile?.picture,
        token,
      });
      console.log('Login Successful', email);
    } catch (err) {
      console.error('Login processing failed', err);
      setError('Login failed.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome App</h1>
      <p>Please sign in to continue to Page 2.</p>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <div style={{ display: 'inline-block' }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => setError('Login failed (Google).')}
        />
      </div>
    </div>
  );
}