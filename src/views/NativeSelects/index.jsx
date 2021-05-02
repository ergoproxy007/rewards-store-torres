import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const { label, results, options, handleChangeOrderBy } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({text:''});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: event.target.value,
    });
    handleChangeOrderBy(value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          {label}
        </InputLabel>
        <NativeSelect
          value={state.text}
          onChange={handleChange}
          inputProps={{
            name: 'text',
            id: 'age-native-label-placeholder',
          }}
        >
          {
            options?.map(option => (
              <option key={option.value} value={option.value}>{option.text}</option>
            ))
          }
        </NativeSelect>
        <FormHelperText>{results}</FormHelperText>
      </FormControl>
     </div>
  );
}
