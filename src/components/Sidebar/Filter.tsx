import React, { FormEvent, SyntheticEvent, useState } from "react";
import { Box, Button, TextField, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Filters } from "../../models/models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 350,
    },
    mainWrapper: {
      marginTop: theme.spacing(5),
      padding: `${theme.spacing(1)}px`,
      // display: "flex",
      // flexDirection: "column",
    },
    inputField: {
      display: "block",
      width: 140,
      fontSize: "18px",
      padding: theme.spacing(1),
      border: "1px solid red",
    },
    title: {
      fontWeight: 600,
      letterSpacing: theme.spacing(0.25),
    },
    submitBtn: {
      marginTop: theme.spacing(5),
      width: 140,
    },
  })
);

const filtersDefaultData = { name: "", instrument: "", city: "All" };

const Filter = () => {
  const [filters, setFilters] = useState<Filters>(filtersDefaultData);
  const classes = useStyles();
  // const { users, loading, error } = useFetch();
  const updateFilters = (
    event: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(event.currentTarget.name);
    setFilters({
      ...filters,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };

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
      <h4 className={classes.title}>FILTERS</h4>
      <TextField
        className={classes.inputField}
        name="name"
        id="filteredName"
        label="name"
        variant="standard"
        value={filters.name}
        onChange={updateFilters}
      />
      <TextField
        className={classes.inputField}
        name="instrument"
        id="instrument"
        label="instrument"
        variant="standard"
        value={filters.instrument}
        onChange={updateFilters}
      />
      <TextField
        className={classes.inputField}
        name="city"
        id="city"
        label="city"
        variant="standard"
        value={filters.city}
        onChange={updateFilters}
      />
      <Button onClick={onSubmitHandler}>Search</Button>
    </Box>
  );
};

export default Filter;
