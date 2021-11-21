import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
};
const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="title-input"
                        name="title"
                        label="Title"
                        type="text"
                        value={formValues.title}
                        onChange={handleInputChange}
                    />
                </Grid>
                
                <Grid item>
                    <FormControl>
                        <Select
                            name="os"
                            value={formValues.os}
                            onChange={handleInputChange}
                        >
                            <MenuItem key="mac" value="mac">
                                Mac
                            </MenuItem>
                            <MenuItem key="windows" value="windows">
                                Windows
                            </MenuItem>
                            <MenuItem key="linux " value="linux">
                                Linux
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    );
};
export default Form;