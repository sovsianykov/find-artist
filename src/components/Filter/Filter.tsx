import React, { FormEvent, useState } from "react";
import { Box, TextField, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useFetch } from "../../hooks/useFetch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // margin: `${theme.spacing(4)} 0 0 0`,
      maxWidth: 350,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mainWrapper: {
      width: 350,
      minHeight: 600,
      padding: `${theme.spacing(3)}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    inputField: {
      display: "block",
      width: 200,
      fontSize: "18px",
      padding: theme.spacing(1),
      border: "1px solid red",
    },
  })
);

const Filter = () => {
  const [filteredName, setFilteredName] = useState<string>("");
  const { users, loading, error } = useFetch();
  const onchangeHandler = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFilteredName(e.currentTarget.value);
  };
  const classes = useStyles();
  return (
    <Box
      component="form"
      className={classes.mainWrapper}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        className={classes.inputField}
        name="filteredName"
        id="filteredName"
        label="name"
        variant="standard"
        value={filteredName}
        onChange={onchangeHandler}
      />
    </Box>
  );
};

export default Filter;
