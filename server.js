import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is working !");
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server at http://localhost:${PORT}`);
})