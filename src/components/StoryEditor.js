import React, { useState } from 'react';
import axios from 'axios';
import './StoryEditor.css';

const StoryEditor = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Story Submitted:", { title, author, description });
  };

  const fetchStorySuggestion = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: 'Suggest a story description for a title: ' + title,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer `,
          'Content-Type': 'application/json',
        },
      });

      setDescription(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching story suggestion:', error);
    }
    setLoading(false);
  };

  return (
    <div className="story-editor">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="button" onClick={fetchStorySuggestion} disabled={loading}>
            {loading ? 'Loading...' : 'Suggest Description'}
          </button>
        </div>
        <button type="submit">Add Story</button>
      </form>
    </div>
  );
};

export default StoryEditor;
