import React, { FunctionComponent } from "react";

import {
  Box,
  Container,
  Paper,
  TextareaAutosize,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import Button from "../../shared/components/Button/CustomButton";
import { createStyles, makeStyles } from "@mui/styles";
import { useForm } from "../../hooks/useForm";

export interface AddUsersFormProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mainWrapper: {
      width: 300,
      minHeight: 400,
      padding: `${theme.spacing(3)}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    inputField: {
      display: "block",
      width: 200,
      fontSize: "16px",
      padding: theme.spacing(1),
      border: "1px solid red",
    },
    txtAreaWrapper: {
      width: 300,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    description: {
      display: "block",
      width: "400px!important",
      fontSize: "16px",
      padding: theme.spacing(2),
    },
    title: {
      textAlign: "center",
      letterSpacing: 1.9,
    },
  })
);

const AddUsersForm: FunctionComponent<AddUsersFormProps> = ({ title }) => {
  const classes = useStyles();
  const { newUser, onChangeHandler, onSubmitHandler } = useForm();

  return (
    <Container>
      <Paper className={classes.root}>
        <Box
          component="form"
          className={classes.mainWrapper}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <TextField
            required
            className={classes.inputField}
            name="firstName"
            id="firstName"
            label="first name"
            variant="standard"
            value={newUser.firstName}
            onChange={onChangeHandler}
          />

          <TextField
            required
            className={classes.inputField}
            name="lastName"
            id="lastName"
            label="lastName"
            variant="standard"
            value={newUser.lastName}
            onChange={onChangeHandler}
          />
          <TextField
            required
            variant="standard"
            className={classes.inputField}
            label="instrument"
            name="instrument"
            id="instrument"
            value={newUser.instrument}
            onChange={onChangeHandler}
          />
          <TextField
            className={classes.inputField}
            variant="standard"
            label="country"
            name="country"
            id="country"
            value={newUser.country}
            onChange={onChangeHandler}
          />
          <TextField
            className={classes.inputField}
            variant="standard"
            label="city"
            name="city"
            id="city"
            value={newUser.city}
            onChange={onChangeHandler}
          />
          <TextField
            className={classes.inputField}
            variant="standard"
            label="phone"
            name="phone"
            id="phone"
            value={newUser.phone}
            onChange={onChangeHandler}
          />
          <TextField
            variant="standard"
            className={classes.inputField}
            label="avatarUrl"
            name="avatarUrl"
            id="avatarUrl"
            value={newUser.avatarUrl}
            onChange={onChangeHandler}
          />

          <div className={classes.txtAreaWrapper}>
            <TextareaAutosize
              placeholder="description"
              className={classes.description}
              name="description"
              id="description"
              value={newUser.description}
              onChange={onChangeHandler}
            />
          </div>

          <Button onClick={onSubmitHandler}>Submit</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddUsersForm;
