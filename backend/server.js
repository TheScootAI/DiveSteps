const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

// Routes
app.get('/api/health', (req, res) => {
  res.json({status: 'ok', message: 'DiveSteps API is running'});
});

// Skills routes
app.get('/api/skills', require('./routes/skills').getSkills);
app.get('/api/skills/:id', require('./routes/skills').getSkillById);

// Trivia routes
app.get('/api/trivia', require('./routes/trivia').getTriviaQuestions);

// User routes
app.post('/api/users', require('./routes/users').createUser);
app.get('/api/users/:id', require('./routes/users').getUserById);

// Video routes
app.post('/api/videos/upload', require('./routes/videos').uploadVideo);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({error: 'Something went wrong!'});
});

app.listen(PORT, () => {
  console.log(`DiveSteps API server running on port ${PORT}`);
});