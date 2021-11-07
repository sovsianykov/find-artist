import React from "react";
import Page from "../../shared/components/Page/Page";
import Container from "../../shared/components/Container/Container";
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import SideBar from "../../components/Sidebar/SideBar";

const CreateUsers = () => {
  return (
    <Page
      title="Create artist profile"
      sideBar={<SideBar />}
      contentDisplay="flex"

    >
      <Container>
        <AddUsersForm title={" new artist"} />
      </Container>
    </Page>
  );
};

export default CreateUsers;
