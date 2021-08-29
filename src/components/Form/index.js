import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

 
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
       <TextField
          id="standard-textarea"
          label="Nome *"
          placeholder="Nome"
          multiline
        />
          <TextField
          id="standard-textarea"
          label="Telefone *"
          placeholder="Telefone"
          multiline
        />
          <TextField
          id="standard-textarea"
          label="E-mail *"
          placeholder="E-mail"
          multiline
        />
       </div>
    </form>
  );
}