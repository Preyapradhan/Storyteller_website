// StoryPage.js
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './StoryPage.css'; // Import CSS for styling
import Rating from './Rating';

const stories = [
  {
    id: 1,
    title: "The Adventure of Tom Sawyer",
    author: "Mark Twain",
    description: "A young boy growing up along the Mississippi River.",
    image: "the-adventures-of-tom-sawyer-DXJ48D.jpg",
    rating: 4.5,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
    image: "pride-and-prejudice-9781471134746_hr.jpg",
    rating: 4.8,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    image: "1984.jpg",
    rating: 4.6,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    description: "The narrative of Captain Ahab's obsessive quest to kill the giant white whale, Moby Dick.",
    image: "moby-dick.jpg",
    rating: 4.2,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about the serious issues of rape and racial inequality.",
    image: "images.jpg",
    rating: 4.9,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story about the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan.",
    image: "the-great-gatsby.jpg",
    rating: 4.4,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    description: "A novel that chronicles the history of the French invasion of Russia through the stories of five aristocratic families.",
    image: "war-and-peace.jpg",
    rating: 4.7,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A story about a few days in the life of a troubled teenage boy named Holden Caulfield.",
    image: "the-catcher-in-the-rye.jpg",
    rating: 4.3,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel that presents a futuristic World State of genetically modified citizens and an intelligence-based social hierarchy.",
    image: "brave-new-world.jpg",
    rating: 4.6,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy novel that follows the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.",
    image: "the-hobbit.jpg",
    rating: 4.9,
    reviews: [
      { user: "User1", comment: "Great book!" },
      { user: "User2", comment: "Enjoyed reading it." }
    ]
  }
];

const StoryPage = () => {
  const { id } = useParams();
  const [story, setStory] = useState(stories.find(story => story.id === parseInt(id, 10)));
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(story.reviews); // Initial comments from story object

  useEffect(() => {
    const createSmoke = () => {
      const smokyBackground = document.querySelector('.smoky-background');

      for (let i = 0; i < 20; i++) {
        const smokeElement = document.createElement('div');
        smokeElement.classList.add('smoke');

        smokeElement.style.top = `${Math.random() * 100}%`;
        smokeElement.style.left = `${Math.random() * 100}%`;
        smokeElement.style.animationDelay = `${Math.random() * 10}s`;

        smokyBackground.appendChild(smokeElement);
      }
    };

    createSmoke();
  }, []);


  if (!story) {
    return <p>Story not found</p>;
  }

  const handleRatingChange = (newRating) => {
    setStory({ ...story, rating: newRating });
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const comment = {
      id: comments.length + 1,
      user: "User", // Replace with actual user authentication or logged-in user
      comment: newComment
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="story-body">
      <div className="story-page">
      <div className="smoky-background"></div>
      <h2>{story.title}</h2>
      <p><strong>Author:</strong> {story.author}</p>
      <img src={`/images/${story.image}`} alt={story.title} className="story-image" />
      <div className="rating-section">
        <Rating defaultRating={story.rating} onChange={handleRatingChange} />
        <span className="rating-value">{story.rating.toFixed(1)}</span>
      </div>
      <p>{story.description}</p>
      
      <div className="reviews-section">
        <h3>Reviews</h3>
        {comments.map((comment, index) => (
          <div key={comment.id} className="review">
            <p>{comment.comment}</p>
            <p className="review-user">- {comment.user}</p>
          </div>
        ))}
        <form onSubmit={handleSubmitComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add your comment..."
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
    </div>
  );
};

export default StoryPage;