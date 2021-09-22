import { Card, Button } from 'react-bootstrap';
import { MainBtn } from '../styles/homeStyles';

const Book = ({ id, title, author, cover }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cover} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            By: {author}
          </Card.Text>
          <Button variant="warning">Edit</Button>
          <Button variant="danger">Delete</Button>
          <MainBtn>Show</MainBtn>
        </Card.Body>
      </Card>
    </>
  )
}

export default Book;