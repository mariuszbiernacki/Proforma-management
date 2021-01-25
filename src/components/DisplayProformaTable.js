import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteProforma } from "../firebaseConfig/firebaseUtils";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    margin: "50px auto",
  },
});

const DisplayProformaTable = ({ proformaList }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>numer faktury proforma</TableCell>
            <TableCell align="right">nazwa firmy</TableCell>
            <TableCell align="right">zamówione produkty</TableCell>
            <TableCell align="right">wartość zamówienia</TableCell>
            <TableCell align="right">data wystawienia proformy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proformaList.map((proforma) => {
            const {
              id,
              proformaNumber,
              companyName,
              product,
              orderValue,
              currency,
              date,
            } = proforma;
            return (
              <TableRow key={id}>
                <TableCell>{proformaNumber}</TableCell>
                <TableCell>{companyName}</TableCell>
                <TableCell>{product}</TableCell>
                <TableCell>
                  {orderValue} {currency}
                </TableCell>
                <TableCell>{date}</TableCell>
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  onClick={() => {
                    deleteProforma(id);
                  }}
                >
                  usuń
                </Button>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    proformaList: state.proformaList,
  };
};

export default connect(mapStateToProps)(DisplayProformaTable);
