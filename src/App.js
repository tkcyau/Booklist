import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Form from './Components/Form';
import BookList from './Components/BookList';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

const BookListHeader = styled.h1`
  color: blue;
`;

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <BookListHeader>BookList App</BookListHeader>
      <BookList currentId={currentId} setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
