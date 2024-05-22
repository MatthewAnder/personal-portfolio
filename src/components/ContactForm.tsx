import { sendEmail } from "@/actions/sendEmail";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Box,
} from "@chakra-ui/react";
import {
  ChangeHandler,
  FieldErrors,
  RegisterOptions,
  useForm,
} from "react-hook-form";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ReactNode } from "react";

const MotionFormLabel = motion(FormLabel);

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
        isInvalid={Boolean(errors.name)}
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
        <TextInput
          id="message"
          label="Message"
          placeholder="Shoot me a message!"
          isTextArea={true}
          register={register}
          errors={errors}
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
  isTextArea = false,
  register,
  errors,
}: TextInputProps) => {
  return (
    <>
      <Label id={id}>{label}</Label>
      {isTextArea ? (
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
      ) : (
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
      )}
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
  isTextArea?: boolean;
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

interface LabelProps {
  children: ReactNode;
  id: string;
}

const Label = ({ children, id }: LabelProps) => {
  return (
    <Box overflow={"hidden"}>
      <MotionFormLabel
        htmlFor={id}
        fontSize={"2xl"}
        fontWeight={"bold"}
        variants={{ visible: { y: 0 }, hidden: { y: 50 } }}
        whileInView={"visible"}
        initial={"hidden"}
        animate={"visible"}
      >
        {children}
      </MotionFormLabel>
    </Box>
  );
};

export default ContactForm;
