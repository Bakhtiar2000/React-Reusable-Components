import { FormEvent, useState } from "react";
// import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/reusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TNormalForm } from "./components/normalForm/Validation";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TNormalForm>();
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const handleModalFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Clicked");
  };
  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
        <form onSubmit={handleModalFormSubmit}>
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

      {/* <NormalForm></NormalForm> */}

      <Form
        double={false}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="test">
            Test
          </label>
          <input type="text" id="test" {...register("test")} />
          {errors?.test && (
            <span className="text-xs text-red-500">
              {errors?.test?.message}
            </span>
          )}
        </div> */}
        <FormSection>
          <Input
            label="Name"
            type="text"
            register={register("name")}
            errors={errors}
          />
          <Input
            label="Email"
            type="email"
            register={register("email")}
            errors={errors}
          />
          <Input
            label="Password"
            type="password"
            register={register("password")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
