CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(100),
  language VARCHAR(100),
  description TEXT,
  price INT,
  discount INT,
  isbn VARCHAR(20),
  "coverImage" VARCHAR(255),
  "inStock" BOOLEAN
);
