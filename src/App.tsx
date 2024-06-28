import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <MainLayout />
      <button className="m-5 btn btn-primary">Button</button>
      <Button className="bg-green-500" variant="outline" outline={true} />
    </Container>
  );
}

export default App;
