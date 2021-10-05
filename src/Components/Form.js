import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    year: '',
    author: { authorName: '', dateOfBirth: '' },
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = (e) => {
    setCurrentId(null);
    setPostData({
      title: '',
      year: '',
      author: { authorName: '', dateOfBirth: '' },
    });
  };
  return (
    <div>
      <h2>{currentId ? 'Edit ' : 'Add '}a book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="year">
          Year:
          <input
            type="text"
            name="number"
            value={postData.year}
            onChange={(e) => setPostData({ ...postData, year: e.target.value })}
          />
        </label>
        <h3>Author</h3>
        <label htmlFor="authorName">
          Name:
          <input
            type="text"
            name="authorName"
            value={postData.author.authorName}
            onChange={(e) => {
              setPostData({
                ...postData,
                author: {
                  ...postData.author,
                  authorName: e.target.value,
                },
              });
            }}
          />
        </label>
        <label htmlFor="dateOfBirth">
          Date of birth:
          <input
            type="date"
            name="dateOfBirth"
            value={postData.author.dateOfBirth}
            onChange={(e) => {
              setPostData({
                ...postData,
                author: {
                  ...postData.author,
                  dateOfBirth: e.target.value,
                },
              });
            }}
          />
        </label>
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
