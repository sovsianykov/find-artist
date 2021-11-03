import React, {
  FormEvent,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from "react";
import { initialUser, User } from "../../models/models";
import { Box, Container, Paper, Theme } from "@mui/material";
import Button from "../../shared/components/Button/CustomButton"
import { createStyles, makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

      width: 375,
      height: 500,
      padding: `${theme.spacing(2)} 0 0 0`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    BoxWrapper: {
      width: "100%",
      height: 800,
      padding: theme.spacing(1),
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
    },
    input: {
      display: "block",
      width: 200,
      height: 20,
      fontSize: "18px",
      padding: theme.spacing(1),
    },
    mainWrapper: {
      margin: "20px auto",
      maxWidth: 600,
      height: 500,
      display: "flex",
    },
    submitBtnWrapper : {

      width: 375,
      marginTop: "50px",
      height:30,

    }
  })
);

const AddUsersForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [newUser, setNewUser] = useState<User>(initialUser);

  const onchangeHandler = (e: FormEvent<HTMLInputElement>) => {
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
          <label htmlFor="firstName">firstName</label>
          <input
            required
            className={classes.input}
            name="firstName"
            id="firstName"
            value={newUser.firstName}
            onChange={onchangeHandler}
          />
          <label htmlFor="lastName">lastName</label>
          <input
            className={classes.input}
            name="lastName"
            id="lastName"
            value={newUser.lastName}
            onChange={onchangeHandler}
          />
          <label htmlFor="instrument">instrument</label>
          <input
            className={classes.input}
            name="instrument"
            id="instrument"
            value={newUser.instrument}
            onChange={onchangeHandler}
          />
          <label htmlFor="country">country</label>
          <input
            className={classes.input}
            name="country"
            id="country"
            value={newUser.country}
            onChange={onchangeHandler}
          />
          <label htmlFor="city">city</label>
          <input
            className={classes.input}
            name="city"
            id="city"
            value={newUser.city}
            onChange={onchangeHandler}
          />
        </Box>
        <Box
          component="form"
          className={classes.root}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <label htmlFor="phone">phone</label>
          <input
            className={classes.input}
            name="phone"
            id="phone"
            value={newUser.phone}
            onChange={onchangeHandler}
          />
          <label htmlFor="hasProfile">hasProfile</label>
          <input
            className={classes.input}
            name="hasProfile"
            id="hasProfile"
            value={newUser.hasProfile}
            onChange={onchangeHandler}
          />
          <label htmlFor="isAuthorized">isAuthorized</label>
          <input
            className={classes.input}
            name="isAuthorized"
            id="isAuthorized"
            value={newUser.isAuthorized}
            onChange={onchangeHandler}
          />
          <label htmlFor="age">age</label>
          <input
            className={classes.input}
            name="age"
            id="age"
            value={newUser.age}
            onChange={onchangeHandler}
          />
          <label htmlFor="description">description</label>
          <input
            className={classes.input}
            name="description"
            id="description"
            value={newUser.description}
            onChange={onchangeHandler}
          />
          <label htmlFor="avatarUrl">avatarUrl</label>
          <input
            className={classes.input}
            name="avatarUrl"
            id="avatarUrl"
            value={newUser.avatarUrl}
            onChange={onchangeHandler}
          />
          <div className={classes.submitBtnWrapper}>
          </div>
        </Box>
      </Paper>
      <Button fullWidth={true}  onClick={onSubmitHandler} >
        Submit
      </Button>
    </Container>
  );
};

export default AddUsersForm;
