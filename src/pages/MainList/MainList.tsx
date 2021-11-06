import React from "react";
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import AccordionApp from "../../shared/components/Acordion/AcordionApp";
import { useFetch } from "../../hooks/useFetch";
import Page from "../../shared/components/Page/Page";
import SideBar from "../../components/Sidebar/SideBar";
import { Collapse, duration } from "@mui/material";

const MainList = () => {
  const { users, loading, error } = useFetch();

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Something vent wrong ...</h1>;
  }
  return (
    <Page title={"Main List"}>
      <Collapse
        in={!loading}
        orientation="vertical"
        timeout={duration.standard}
      >
        <AccordionApp users={users} />
      </Collapse>
    </Page>
  );
};

export default MainList;
