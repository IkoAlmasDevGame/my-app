import {Col, Container, Row, Button} from "react-bootstrap";
import '../style/LandingPage.css';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className="text-white d-flex justify-content-center align-items-center mt-3">
            <Row>
              <Col>
                <div className="title">PUSAT INFORMASI</div>
              </Col>
            </Row>
          </Container>
        </div>    
    );
}

export default Intro;