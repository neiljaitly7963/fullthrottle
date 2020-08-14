import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Calendar from 'react-calendar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './UserModal.css';
import Modaal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function UserModal(props) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <Calendar
                  
                  onClickDay={props.onClickDay}
                  value={props.date}
                />
      
    </div>
  );

  console.log(props.currentuser)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
      <Modaal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modaal>
    </div>
        </Modal.Title>
          <div>
            <h4>{props.currentuser.name}</h4>
            <p>User Id: {props.currentuser.id}</p>
            <p>User email: {props.currentuser.email}</p>
          </div>
          <Button type="button" onClick={handleOpen}>
            Select Different Date
          </Button>
     
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
