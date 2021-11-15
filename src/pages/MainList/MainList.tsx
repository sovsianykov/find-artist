import React from "react";
import AccordionApp from "../../shared/components/Acordion/AcordionApp";
import { useFetch } from "../../hooks/useFetch";
import Page from "../../shared/components/Page/Page";
import { Collapse, duration } from "@mui/material";
import SideBar from "../../components/Sidebar/SideBar";
import Filter from "../../components/Sidebar/Filter";

const MainList = () => {
  const { users, loading, error } = useFetch();

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Something vent wrong ...</h1>;
  }
  return (
    <Page
      title={"Main List"}
      sideBar={
        <SideBar>
          <Filter />
        </SideBar>
      }
      contentDisplay="flex"
    >
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
