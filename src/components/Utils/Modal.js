import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ModalTabs from "../tabs/ModalTab";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    padding: 10,
    height: "80%",
    overflow: "auto"
  },
  button: {
    margin: "5px",
    padding: "15px 30px",
    fontWeight: "bold",
    backgroundColor: "#1fc5ae",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
    boxShadow: "3px 3px 5px -2px rgba(66,66,66,1)"
  }
}));

function PopModal(props) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add +
      </button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <ModalTabs />
          <button className={classes.button} onClick={handleClose} index={2}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default PopModal;
