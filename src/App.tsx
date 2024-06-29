import { useState } from "react";
// import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      {/* <MainLayout />
      <button className="m-5 btn btn-primary">Button</button> */}
      <Button
        onClick={handleModal}
        variant="ghost"
        className="w-[500px] mt-5 ml-5"
      >
        Open Modal
      </Button>
      <Modal isOpen={modal} onClose={handleModal}>
        <Modal.Header>
          <h3>Modal Title</h3>
          <Modal.CloseButton></Modal.CloseButton>
        </Modal.Header>
        <p>This is not a modal</p>
      </Modal>
    </Container>
  );
}

export default App;
