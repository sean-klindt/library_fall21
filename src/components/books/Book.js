import { Card, Button } from 'react-bootstrap';

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
        </Card.Body>
      </Card>
    </>
  )
}

export default Book;