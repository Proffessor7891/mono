"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const backendUrl =
      process.env.NODE_ENV === "production"
        ? "https://monoback.onrender.com/api/hello"
        : "http://localhost:5000/api/hello";
    fetch(backendUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching backend"));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Hello from backend:</h1>
      <div style={{ fontSize: 24, marginTop: 20 }}>{message}</div>
    </main>
  );
}
// ...existing code...
