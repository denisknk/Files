import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Wrapper } from './components/Wrapper';
import { UsefulPaper } from './components/Paper';
import { Form } from './components/Form';
import { loginUser } from '../../../store/actions/login';
import {AppState} from "../../../store/configureStore";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: AppState) => state.login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    dispatch(loginUser({ email, password }));
  };

  return (
    <Wrapper>
      <UsefulPaper>
        <Form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
          >
            <Typography align="center" variant="h3">
              LOGIN
            </Typography>
            {!!error && (
              <Typography align="center" variant="h6" color="error">
                {error.message}
              </Typography>
            )}
            <Grid item md sm xs>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                type="email"
                onChange={handleChange}
                fullWidth
                required
                error={!!error}
              />
            </Grid>
            <Grid item md sm xs>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                error={!!error}
              />
            </Grid>
            <Grid item md sm xs>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!formData.email || !formData.password || loading}
              >
                {loading ? 'Loading' : 'LOGIN'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </UsefulPaper>
    </Wrapper>
  )
}
