import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner
} from 'reactstrap';

const CREATE_LOT = gql`
  mutation createLot($name: String!, $description: String) {
    createLot(name: $name, description: $description) {
      id
    }
  }
`;

export default function LotModal({ isOpen, toggle, isNew, lot=null }) {

  const [name, setName] = useState(lot ? lot.name : "");
  const [description, setDescription] = useState(lot ? lot.description : "");
  const [message, setMessage] = useState(null);

  const [ createLot, { loading }] = useMutation(CREATE_LOT, {
    onCompleted({ createLot }){
      return <Redirect to={`/lot/${createLot.id}`} />
    },
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors.length > 0) {
        setMessage(graphQLErrors[0].message);
      } else if(networkError) {
        setMessage(networkError.message || "Network Error");
      } else {
        setMessage("There was an error creating a user");
      }
    }
  });

  const modalTitle = isNew ? "Add Lot" : "Edit Lot";

  const submitButton = isNew ? <Button className="add-lot">Add Lot</Button> : <Button className="edit-lot">Edit Lot</Button>;
  
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        { loading ? <Spinner type="growing" color="dark" /> :
          <Form className="landing-form"> 
            <FormGroup row className="form-row">
              <Label for="name" sm={3}>Name</Label>
              <Col sm={9}>
                <Input 
                  type="text" 
                  name="name" 
                  id="lot-name" 
                  placeholder="Enter Name" 
                  value={ name }
                  onChange={e => setName(e.target.value)} />
              </Col> 
            </FormGroup>
            <FormGroup row className="form-row">
              <Label for="description" sm={3}>Description</Label>
              <Col sm={9}>
                <Input 
                  type="textarea" 
                  name="description" 
                  id="lot-description"
                  value={ description }
                  onChange={e => setDescription(e.target.value)} />
              </Col> 
            </FormGroup>
            <h6 className="body-text error">{message}</h6>
            {submitButton}
          </Form>
        }
      </ModalBody>
    </Modal>
  );
}
