const express = require('express');
const cors=require('cors');
const app = express();
app.use(cors());
const PORT = 5000;

app.get('/', (req, res) => {
res.send('🚀 Backend is running successfully!');
});

app.get('/api', (req, res) => {
res.json({ message: "Hello from backend API" });
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
