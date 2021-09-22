import { Container, Row, Col } from 'react-bootstrap';
import Book from './Book';

const BookList = ({ books }) => (
  <>
    <Container>
      <Row>
        { books.map( b => (
          <Col>
            <Book {...b} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
)

export default BookList;