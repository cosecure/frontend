import { Component } from "react";
import axios from 'axios';
import {url} from "../utils/url"
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import fileDownload from 'js-file-download';

class AdminComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
           token: localStorage.getItem("token"),
           dataset: []
        };

        if (!this.state.token) {
            window.location.href = '/';
        }
    }

    componentDidMount() {
        axios.get(url+"/ml_model/dataset/list/", {
            headers: { Authorization: `Token ${localStorage.getItem("token")}` }
        })
        .then(res => {
            console.log(res.data);
            this.setState({ dataset: res.data });
            console.log(this.state)
        })
        .catch(err => {
            console.log("error fetching dataset");
        })
    }

    handleCSVDownload = () => {
        axios.get(url+"/ml_model/dataset/download/", {
            responseType: 'blob',
            headers: { 
                Authorization: `Token ${localStorage.getItem("token")}`,
                'Content-Type': 'application/csv'
            }
        })
        .then(res => {
            fileDownload(res.data, 'dataset.csv');
            console.log(res.data);
        })
        .catch(err => {
            console.log("error fetching dataset");
        })
    }

    render() {
        return <div>
            <h2>Welcome Admin, Lucky YOU</h2>
            <Container>
            <Button variant="info" type="submit" onClick={this.handleCSVDownload} className="m-4" style={{ width: "90%"}}>Download CSV</Button>
            <ListGroup>
                <Row>
                {
                    this.state.dataset.map(data => {
                        return (
                            <Col md={6} lg={3} sm={12} key={data.pk}>
                            <ListGroup.Item id={data.key} key={data.pk}>
                                <p>id: {data.pk}</p>
                                <p>temperature: {data.fields.temperature}</p>
                                <p>gender: {data.fields.gender}</p>
                                <p>headache: {data.fields.headache}</p>
                                <p>contact_with_positive_person: {data.fields.contact_with_positive_person}</p>
                                <p>cough: {data.fields.cough}</p>
                                <p>shortness_of_breath: {data.fields.shortness_of_breath}</p>
                                <p>spO2: {data.fields.spO2}</p>
                                <p>taste_sensitive: {data.fields.taste_sensitive}</p>
                                <p>bpm: {data.fields.bpm}</p>
                                <p>throat_soar: {data.fields.throat_soar}</p>
                                <p>result: {data.fields.result}</p>
                            </ListGroup.Item>
                            </Col>
                        )
                    })
                }
                </Row>
            </ListGroup>
            </Container>
        </div>
    }
}

export default AdminComp;