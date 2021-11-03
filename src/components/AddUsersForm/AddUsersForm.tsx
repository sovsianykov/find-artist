import React, {
  FormEvent,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from "react";
import { initialUser, User } from "../../models/models";
import {Box, Container, Paper, TextareaAutosize, TextField, Theme} from "@mui/material";
import Button from "../../shared/components/Button/CustomButton";
import { createStyles, makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 375,
      height: "800px",
      padding: `${theme.spacing(3)}`,
    },
    BoxWrapper: {
      width: "100%",
      height: 600,
      // padding: theme.spacing(1),

    },
    inputField: {
       display: "block",
      width: 200,
      fontSize: "18px",
      padding: theme.spacing(1),
      border: "1px solid red"
    },
    mainWrapper: {
      margin: "20px auto",
      maxWidth: 600,
      height: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent:"space-between",
      alignItems:"center"
    },
    submitBtnWrapper: {
      width: 375,
      marginTop: 20,
      height: 50
    },
  })
);

const AddUsersForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [newUser, setNewUser] = useState<User>(initialUser);

  const onchangeHandler = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewUser({ ...newUser, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(createUser(newUser));
  };

  return (
    <Container>
      <Paper className={classes.mainWrapper}>
        <Box
          component="form"
          className={classes.root}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            className={classes.inputField}
            name="firstName"
            id="firstName"
            label="first name"
            variant="standard"
            value={newUser.firstName}
            onChange={onchangeHandler}
          />

          <TextField
              required
            className={classes.inputField}
            name="lastName"
            id="lastName"
            label="lastName"
            variant="standard"
            value={newUser.lastName}
            onChange={onchangeHandler}
          />
          <TextField
              required
              variant="standard"
            className={classes.inputField}
            label = "instrument"
            name="instrument"
            id="instrument"
            value={newUser.instrument}
            onChange={onchangeHandler}
          />
          <TextField

            className={classes.inputField}
            variant="standard"
            label="country"
            name="country"
            id="country"
            value={newUser.country}
            onChange={onchangeHandler}
          />
          <TextField
            className={classes.inputField}
            variant="standard"
            label="city"
            name="city"
            id="city"
            value={newUser.city}
            onChange={onchangeHandler}
          />
          <TextField
            className={classes.inputField}
            variant="standard"
            label="phone"
            name="phone"
            id="phone"
            value={newUser.phone}
            onChange={onchangeHandler}
          />
          <div className={classes.submitBtnWrapper}>
          <TextareaAutosize
            className={classes.inputField}
            name="description"
            id="description"
            value={newUser.description}
            onChange={onchangeHandler}
          /></div>
          <TextField
              variant="standard"
            className={classes.inputField}
              label="avatarUrl"
            name="avatarUrl"
            id="avatarUrl"
            value={newUser.avatarUrl}
            onChange={onchangeHandler}
          />
          <div className={classes.submitBtnWrapper}>
            <Button fullWidth={true} onClick={onSubmitHandler}>
              Submit
            </Button>
          </div>
        </Box>
      </Paper>

    </Container>
  );
};

export default AddUsersForm;
