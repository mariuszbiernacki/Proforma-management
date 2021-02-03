import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { deleteProforma } from "../firebaseConfig/firebaseUtils";

const DeleteProformaDialog = ({
  id,
  openDeleteProformaDialog,
  handleDeleteProformaDialogClose,
}) => {
  return (
    <Dialog
      open={openDeleteProformaDialog}
      onClose={handleDeleteProformaDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Czy na pewno chcesz usunąć?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleDeleteProformaDialogClose} color="primary">
          Nie
        </Button>
        <Button
          onClick={() => {
            deleteProforma(id);
            handleDeleteProformaDialogClose();
          }}
          color="secondary"
          autoFocus
        >
          Tak
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProformaDialog;
