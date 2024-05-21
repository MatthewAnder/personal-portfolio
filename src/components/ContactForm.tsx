import { sendEmail } from "@/actions/sendEmail";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  ChangeHandler,
  FieldErrors,
  RegisterOptions,
  useForm,
} from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form
      action={async (formData: FormData) => {
        const { data, error } = await sendEmail(formData);
      }}
    >
      <FormControl
        width={{ base: "20em", md: "25em" }}
        mt={{ base: 10, lg: 0 }}
      >
        <TextInput
          id="name"
          label="Name"
          placeholder="Your name"
          register={register}
          errors={errors}
        />
        <TextInput
          id="email"
          label="Email"
          placeholder="Your email"
          register={register}
          errors={errors}
        />
        <FormLabel htmlFor={"message"} fontSize={"2xl"} fontWeight={"bold"}>
          Message
        </FormLabel>
        <Textarea
          id="message"
          variant={"flushed"}
          placeholder="Shoot me a message!"
          {...register("message", {
            required: "This is required",
          })}
          borderBottom={"2px"}
          borderColor={"secondary.main"}
          focusBorderColor="secondary.700"
          fontSize={"lg"}
          resize={"none"}
          h={"10em"}
        />
      </FormControl>
      <Button
        mt={4}
        bg={"primary.main"}
        color={"text.main"}
        fontFamily={"Hind-Regular"}
        isLoading={isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

const TextInput = ({
  id,
  label,
  placeholder,
  register,
  errors,
}: TextInputProps) => {
  return (
    <>
      <FormLabel htmlFor={id} fontSize={"2xl"} fontWeight={"bold"}>
        {label}
      </FormLabel>
      <Input
        variant={"flushed"}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: "This is required",
        })}
        fontSize={"lg"}
        borderBottom={"2px"}
        borderColor={"secondary.main"}
        focusBorderColor="secondary.700"
      />
      <FormErrorMessage>
        {errors.name && errors.name.message?.toString()}
      </FormErrorMessage>
    </>
  );
};

interface TextInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: (
    name: string,
    RegisterOptions?: RegisterOptions,
  ) => {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: any;
  };
  errors: FieldErrors;
}

export default ContactForm;
