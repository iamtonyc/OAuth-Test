export default function DashboardPage({ user, setUser }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard (Page 2)</h2>
      <p>Success! You have navigated here after OAuth.</p>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
        <h4>User Session Active</h4>
        <button onClick={() => setUser(null)}>Log Out</button>
      </div>
    </div>
  );
}