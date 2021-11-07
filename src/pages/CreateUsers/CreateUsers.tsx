import React from "react";
import Page from "../../shared/components/Page/Page";
import Container from "../../shared/components/Container/Container";
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import SideBar from "../../components/Sidebar/SideBar";

const CreateUsers = () => {
  return (
    <Page
      title={"Create"}
      sideBar={<SideBar />}

    >
      <Container>
        <AddUsersForm title={"create new user"} />
      </Container>
    </Page>
  );
};

export default CreateUsers;
