import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/posts';
const Book = ({ data, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Title: {data.title}</h3>
      <p>Year: {data.year}</p>
      <p>Author name: {data.author.authorName}</p>
      <p>Author date of birth: {data.author.dateOfBirth}</p>
      <button onClick={() => setCurrentId(data._id)}>Edit</button>
      <button onClick={() => dispatch(deletePost(data._id))}>Delete</button>
    </div>
  );
};

export default Book;
