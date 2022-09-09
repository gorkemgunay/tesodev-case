import AddLinkForm from "../components/AddLinkForm";
import Search from "../components/Search";
import Container from "../components/Container";

function Home() {
  return (
    <Container>
      <h2>Home Page</h2>
      <AddLinkForm />
      <Search />
    </Container>
  );
}

export default Home;
