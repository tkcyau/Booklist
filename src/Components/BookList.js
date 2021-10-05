import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <h1>Booklist</h1>
      {!posts.length ? (
        <h2>Enter additional books</h2>
      ) : (
        posts.map((post) => <Book data={post} setCurrentId={setCurrentId} />)
      )}
    </div>
  );
};

export default BookList;
