const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/interactive-storytelling', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storySchema = new mongoose.Schema({
  title: String,
  author: String,
  date: { type: Date, default: Date.now },
  genre: String,
  content: Array,
});

const Story = mongoose.model('Story', storySchema);

app.post('/api/stories', async (req, res) => {
  const { title, author, genre, content } = req.body;
  const newStory = new Story({ title, author, genre, content });
  await newStory.save();
  res.status(201).send(newStory);
});

app.get('/api/stories', async (req, res) => {
  const stories = await Story.find();
  res.status(200).send(stories);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
