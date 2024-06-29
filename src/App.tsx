import { FormEvent, useState } from "react";
// import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./normalForm/NormalForm";

function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Clicked");
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
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 mb-3">
            <label htmlFor="email">Email</label>
            <input
              className="border border-black p-2 rounded-md"
              type="text"
              name="email"
            />
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="password">Password</label>
            <input
              className="border border-black p-2 rounded-md"
              type="password"
              name="password"
            />
          </div>
          <button
            className="bg-green-500 text-white text-sm p-1 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Modal>

      <NormalForm></NormalForm>
    </Container>
  );
}

export default App;
