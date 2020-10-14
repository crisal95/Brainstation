import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Img from "../img/img";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 900,
    display: "flex",
    flexShrink: 1,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    flexDirection: "row",
    flexFlow: "wrap",
    justifyContent: "space-around",
  },
}));

export default function InfoModal(heroInfo) {
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
      <div className="image">
        <Img data={heroInfo.images.md} />
      </div>
      <div>
        <h2>Hero information</h2>
        <p>
          <span className="info-title">Name: </span> {heroInfo.name}
        </p>
        <h3>appearance</h3>
        <p>
          <span className="info-title">Gender: </span>{" "}
          {heroInfo.appearance.gender}
        </p>
        <p>
          <span className="info-title">Race: </span> {heroInfo.appearance.race}
        </p>
        <p>
          <span className="info-title">Height: </span>{" "}
          {heroInfo.appearance.height[1]}
        </p>
        <h3>Biography</h3>
        <p>
          <span className="info-title">FullName: </span>{" "}
          {heroInfo.biography.fullName}
        </p>
        <p>
          <span className="info-title">Alter egos: </span>{" "}
          {heroInfo.biography.alterEgos}
        </p>
        <p>
          <span className="info-title">Place of birth: </span>{" "}
          {heroInfo.biography.placeOfBirth}
        </p>
        <p>
          <span className="info-title">First appearance: </span>{" "}
          {heroInfo.biography.firstAppearance}
        </p>
        <p>
          <span className="info-title">Publisher: </span>{" "}
          {heroInfo.biography.publisher}
        </p>
        <p>
          <span className="info-title">Alignment: </span>{" "}
          {heroInfo.biography.alignment}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="container">
          <div className="bodyText">{body}</div>
        </div>
      </Modal>
    </div>
  );
}
