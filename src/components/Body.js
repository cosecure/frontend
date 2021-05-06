import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Body() {
    return <div className="body m-4">
        <Container className="alert alert-primary p-4 text-justify" id="about">
            <h2 className="mb-4 mt-4">About CoSecure</h2>
            <p className="lead">Since COVID pandemic is again getting peak and uncontrollable, people are not confirm with their symptoms against covid-19 virus, so we across an idea of predicting the user’s covid-19 virus attack based on their body temperature, beats per minute, spO2 level, taste sensitive, sneeze, headache, throat soar, cough and if they contacted with covid-19 positive patient. We will inform the user the changes that he/she is effected based on the previous data of covid-19 patients.</p>
            <p className="lead">CoSecure has two type of users, one is users who want to test their symptoms and another type of user are doctors who can be consulted based on the symptoms.</p>
            <p className="lead">CoSecure is Android Application where user can login and check their chances of covid-19 virus attack based on the body situation. We will take the user data of body temperature, beats per minute, spO2 level, taste sensitive, sneeze, headache, throat soar, cough and if they contacted with covid-19 positive patient. And then we inform the user the chances of virus affected. The prediction is purely based on Machine Learning model that is trained based on the covid-19 test reports of thousands users. If the chances of the user is really high then user can consult the doctor via chat in our application.</p>
        </Container>
        <br/>
        <Container className="alert alert-success p-4 text-justify" id="test">
            <Row>
                <Col md={6} sm={12}>
                    <div className="container">
                        <h2 className="text-success">Sample Prediction Test</h2>
                        <p className="lead">
                            This is just a basic prediction trained over 100 dataset, Download the Official application for actual prediction of the covid-19 virus
                        </p>
                        <Button variant="outline-success" className="m-2">Download the Android App</Button>
                    </div>
                </Col>
                <Col md={6} sm={12} className="alert alert-success text-justify">
                <Form>
                    <h2 className="test-sucess">Predict your test</h2>
                    <Form.Group>
                        <Form.Label>Temperature</Form.Label>
                        <Form.Control type="number" placeholder="Enter your body temperture" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Beats per minute</Form.Label>
                        <Form.Control type="number" placeholder="Enter your heart's beats per minute" />
                    </Form.Group>
                    <Button variant="primary" className="mt-4 fluid" block>
                        Predict test
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Body;