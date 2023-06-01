import React from 'react'

export default function UserDetails({info}) {
  return (
    <div>
      <p data-testid="username">{info.username}</p>
      <p data-testid="email">{info.email}</p>
      <p data-testid="phone">{info.phone}</p>
    </div>
  );
}
