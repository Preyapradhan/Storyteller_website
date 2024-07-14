import React from 'react';
import { Link } from 'react-router-dom';
import './StoryList.css'; // Import CSS for styling

const stories = [
  {
    id: 1,
    title: "The Adventure of Tom Sawyer",
    author: "Mark Twain",
    description: "A young boy growing up along the Mississippi River.",
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    description: "The narrative of Captain Ahab's obsessive quest to kill the giant white whale, Moby Dick.",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about the serious issues of rape and racial inequality.",
  },
  {
    id: 6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story about the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan.",
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    description: "A novel that chronicles the history of the French invasion of Russia through the stories of five aristocratic families.",
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A story about a few days in the life of a troubled teenage boy named Holden Caulfield.",
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel that presents a futuristic World State of genetically modified citizens and an intelligence-based social hierarchy.",
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy novel that follows the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.",
  },
];

const StoryList = ({ searchQuery }) => {
  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="story-list-container">
      
      <div className="story-list">
        {filteredStories.length > 0 ? (
          filteredStories.map(story => (
            <div key={story.id} className="story-card">
              <Link to={`/stories/${story.id}`}>
              <h3>{story.title}</h3>
              <p><strong>Author:</strong> {story.author}</p>
              <p>{story.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No stories found</p>
        )}
      </div>
    </div>
  );
};

export default StoryList;
