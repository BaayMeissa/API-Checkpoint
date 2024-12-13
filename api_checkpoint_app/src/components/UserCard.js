import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'

function UserCard(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.name}</Accordion.Header>
        <Accordion.Body>
          <h5>Name: {props.name}</h5>
          <h6>email: {props.email}</h6>
          <h6>Username: {props.username}</h6>
          <h6>adresse: {props.adresse}</h6>
          <h6>Phone: {props.phone}</h6>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default UserCard;