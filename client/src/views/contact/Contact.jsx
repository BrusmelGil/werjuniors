import './contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact () {
    return (
        <>
        <main>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Contactame</h1>
            </Col>
          </Row>
        </Container>
      </main>
      </>
    )
}

export default Contact;