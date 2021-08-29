import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    RPA: true,
    produtoDigital: false,
    analytics: false,
    BPM: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { RPA, produtoDigital, analytics, BPM } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Oportunidades</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={RPA} onChange={handleChange} name="RPA" />}
            label="RPA"
          />
          <FormControlLabel
            control={<Checkbox checked={produtoDigital} onChange={handleChange} name="produtoDigital" />}
            label="Produto Digital"
          />
          <FormControlLabel
            control={<Checkbox checked={analytics} onChange={handleChange} name="analytics" />}
            label="Analytics"
          />
             <FormControlLabel
            control={<Checkbox checked={BPM} onChange={handleChange} name="BPM" />}
            label="BPM"
          />
        </FormGroup>
      </FormControl>
      </div>
  );
}