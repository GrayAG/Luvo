import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    setMessage(error ? error.message : "✅ Check your email to confirm your account!")
  }

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMessage(error ? error.message : "🎉 Logged in successfully!")
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px", margin: "50px auto" }}>
      <h2>💌 Luvo Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px" }}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
      <p>{message}</p>
    </div>
  )
}
