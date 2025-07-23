"use client";
import { useEffect, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [booksError, setBooksError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching backend"));

    fetch("http://localhost:5000/books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBooks(data);
          setBooksError("");
        } else {
          setBooks([]);
          setBooksError("No books found");
        }
      })
      .catch((err) => {
        setBooks([]);
        setBooksError(err.message || "Error fetching books");
      });
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Hello from backend:</h1>
      <div style={{ fontSize: 24, marginTop: 20 }}>{message}</div>
      <h2 style={{ marginTop: 40 }}>Books:</h2>
      {booksError && (
        <div style={{ color: "red", marginBottom: 16 }}>{booksError}</div>
      )}
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: 16 }}>
            <strong>{book.title}</strong> by {book.author} — ${book.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
// ...existing code...
