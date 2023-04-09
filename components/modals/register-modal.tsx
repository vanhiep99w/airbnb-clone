import useRegisterModal from "@/hooks/useRegisterModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Modal from "@/components/modals/modal";
import Heading from "@/components/modals/heading";
import Input from "@/components/input";
import toast from "react-hot-toast";
import Button from "@/components/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/register", data);
      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Some think went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subTitle="Create an account!" />
      <Input
        id="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        label="Email"
        type="email"
      />
      <Input
        id="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        label="Name"
      />
      <Input
        id="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        label="Password"
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        onClick={() => {}}
        outline
        label="Continue with Google"
        icon={FcGoogle}
      />
      <Button
        onClick={() => {}}
        outline
        label="Continue with Github"
        icon={AiFillGithub}
      />
      <div className="mt-4 flex justify-center gap-2 text-center font-light text-neutral-500">
        <p>Already have an account?</p>
        <div
          onClick={registerModal.onClose}
          className="cursor-pointer text-neutral-800 hover:underline"
        >
          Login
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
