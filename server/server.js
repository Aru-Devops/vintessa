const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jewellery', require('./routes/jewelleryRoutes'));

app.get('/', (req, res) => {
  res.send('Jewellery API running 🟢');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));