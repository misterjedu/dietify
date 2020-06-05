import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function TargetDetail(props) {
  return (
    <>
      <TextField
        defaultValue={props.signUpDetails.targetWeight || ""}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="targetWeight"
        label="Target Weight"
        type="number"
        name="targetWeight"
        autoComplete="age"
        onChange={props.handleInputChange}
      />
      <TextField
        defaultValue={props.signUpDetails.targetWaistLine || ""}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="targetWaistLine"
        label=" Target Waistline(Cm)"
        type="number"
        id="targetWaistLine"
        onChange={props.handleInputChange}
      />
      <FormControlLabel
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="I want to receive inspiration, marketing promotions and updates via email."
      />
    </>
  );
}

export default TargetDetail;
