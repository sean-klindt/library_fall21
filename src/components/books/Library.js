import { useState } from 'react';
import BookList from './BookList';

const Library = ({}) => {
  const [books, setBooks] = useState([
    {id: 1, title: "Green Eggs and Ham", author: "Dr Suess", cover: "https://images.unsplash.com/photo-1477506410535-f12fe9af97cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZSUyMGVnZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: 2, title: "Harry Potter", author: "J.K. Rowling", cover: "https://images.unsplash.com/photo-1565292266983-74457d481f44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: 3, title: "Hobbit", author: "J.R.R. Tolkien", cover: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9iYml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
  ])

  return (
    <>
      <BookList books={books}/>

    </>
  )
}

export default Library;