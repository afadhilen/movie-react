import {Container, Row, Col, Button} from "react-bootstrap"

function Intro() {
  return (
    <>
      <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">THE IMDB MOVIES TRENDING</div>
              <div className="subtitle">"Kalau bosan nonton sikit lah"</div>
              <div className="listButton mt-4 text-center">
                <Button href="#trending" variant="secondary">
                  Browse Gallery
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Intro
