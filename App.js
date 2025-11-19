import React, { useState } from 'react';

export default function App() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signup');
  const [msg, setMsg] = useState('');

  async function handleSubmit() {
    const res = await fetch(`http://localhost:3000/${mode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    });

    const data = await res.json();
    setMsg(data.message);
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Gatekeeper App</h1>

      <button onClick={() => setMode('signup')}>Signup</button>
      <button onClick={() => setMode('login')}>Login</button>

      <h2>{mode.toUpperCase()}</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <h3>{msg}</h3>
    </div>
  );
}
