import React, { useState } from "react";
import moment from "moment";
import { Form } from "../styledComponents/Form";
// material ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "date-fns";
// import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
//redux
import { connect } from "react-redux";
import { addProforma as addProformaAction } from "../actions/actions";

const AddNewProformaForm = ({ addProforma }) => {
  const [currency, setCurrency] = useState("PLN");
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const [proformaDate, setProformaDate] = useState();

  const handleProformaDateChange = (date) => {
    setProformaDate(date);
  };

  const formattedDate = moment(proformaDate).format("DD/MM/YYYY");

  const handleForm = (e) => {
    e.preventDefault();
    const newProforma = {
      proformaNumber: e.target.proformaNumber.value,
      companyName: e.target.companyName.value,
      product: e.target.product.value,
      orderValue: e.target.orderValue.value,
      currency,
      date: formattedDate,
    };
    addProforma(newProforma);
    e.target.reset();
  };
  return (
    <Form onSubmit={handleForm}>
      <TextField
        id="outlined-basic"
        label="podaj numer proformy"
        variant="outlined"
        name="proformaNumber"
      />
      <TextField
        id="outlined-basic"
        label="podaj nazwe zamawiającej firmy"
        variant="outlined"
        name="companyName"
      />
      <TextField
        id="outlined-basic"
        label="podaj co zamawia klient (nazwa produktu)"
        variant="outlined"
        name="product"
      />
      <TextField
        id="outlined-basic"
        label="podaj wartość zamówienia"
        variant="outlined"
        name="orderValue"
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">Waluta</FormLabel>
        <RadioGroup
          aria-label="currency"
          name="currency"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <FormControlLabel value="PLN" control={<Radio />} label="PLN" />
          <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
        </RadioGroup>
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="data wystawienia proformy"
          format="dd/MM/yyyy"
          name="deliveryDate"
          value={proformaDate}
          onChange={handleProformaDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <Button variant="contained" type="submit" color="primary">
        dodaj proformę
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProforma: (newProforma) => dispatch(addProformaAction(newProforma)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewProformaForm);
