import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json()); 

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
  },
];

app.get("/books", (req, res) => {
  res.json({
    success: true,
    data: books,
  });
});

app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: "Book not found" });
  
  res.json({
    success: true,
    data: book,
  });
});

app.post("/books", (req, res) => {
  const { id, title, author } = req.body;
  res.status(201).json({ success: true, message: "Book added" });
});

app.put("/books/:id", (req, res) => {
  res.json({
    success: true,
    message: "Book updated successfully"
  });
});

app.delete("/books/:id", (req, res) => {
  res.json({
    success: true,
    message: "Book deleted successfully"
  }); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
