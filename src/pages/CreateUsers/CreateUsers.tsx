import React from "react";
import Page from "../../shared/components/Page/Page";
import Container from "../../shared/components/Container/Container";
import AddUsersForm from "../../components/AddUsersForm/AddUsersForm";

const CreateUsers = () => {
  return (
    <Page title="Create artist profile" contentDisplay="flex">
      <Container>
        <AddUsersForm title={" new artist"} />
      </Container>
    </Page>
  );
};

export default CreateUsers;
