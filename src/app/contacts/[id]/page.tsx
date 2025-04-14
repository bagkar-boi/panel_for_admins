'use client'

import { useEffect, useState } from 'react'

type User = {
  key: number
  name: string
  email: string
  phone: number
  archived: boolean
  deleted: boolean
  blocked: boolean
}

export default function UserDetail() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      setUser(JSON.parse(stored))
    }
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Status: {user.archived ? 'Archived' : 'Active'}</p>
    </div>
  )
}
