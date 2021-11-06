import React from "react";
import Page from "../../shared/components/Page/Page";
import Container from "../../shared/components/Container/Container";
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";
import SideBar from "../../components/Sidebar/SideBar";
import OpenButton from "../../shared/components/Button/OpenButton";

const CreateUsers = () => {
  return (
    <Page
      title={"Create"}
      sideBar={<SideBar />}
      sideBarButton={<OpenButton onClick={() => null} >
          open
      </OpenButton>}
    >
      <Container>
        <AddUsersForm title={"create users"} />
      </Container>
    </Page>
  );
};

export default CreateUsers;
