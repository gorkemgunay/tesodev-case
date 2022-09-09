import Container from "../components/Container";
import Header from "../components/Header";
import AddLinkForm from "../components/AddLinkForm";

function AddLink() {
  return (
    <div className="add-link">
      <Header showLogo showReturn />
      <Container>
        <AddLinkForm />
      </Container>
    </div>
  );
}

export default AddLink;
