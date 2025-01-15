import { useForm } from "react-hook-form";

const StnForm = ({ onSubmit }) => {
  const { handleSubmit } = useForm();
  return <form onSubmit={handleSubmit(onSubmit)}>This is form</form>;
};

export default StnForm;
