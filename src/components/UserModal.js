import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Calendar from 'react-calendar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function UserModal(props) {



  // console.log(props.timedatas, "inside modal")
  // console.log(props.date)
  // console.log(props.currentuser, "currentuser")
  console.log(props.timedatas, "timesdatas")


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">      
                <Calendar
                  onChange={props.onChange}
                  onClickDay={props.onClickDay}
                  value={props.date}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {

                props.timedatas === undefined ? 
                <p>No data for this date</p>
                :
                props.timedatas.map((timeData, index) => {
                  return(
                    <tr key={index} id={index}>
                      <td >{timeData.startime}</td>
                      <td >{timeData.endtimne}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
