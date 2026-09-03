import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

interface TextInputProps {
  id: "name" | "email" | "message";
  label: string;
  placeholder: string;
  isTextArea?: boolean;
  register: UseFormRegister<FormInput>;
  errors: FieldErrors;
}

interface ToastProps {
  title: string;
  description: string;
  status: "info" | "warning" | "success" | "error";
}

interface LabelProps {
  children: ReactNode;
  id: string;
}

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput>();

  const toast = useToast();
  const resultToast = ({ title, description, status }: ToastProps) => {
    return toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };

  // function for submitting form
  const submitForm = async (formData: FormInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        resultToast({
          title: "Email sent!",
          description: "Happy to talk to you!",
          status: "success",
        });
      } else {
        resultToast({
          title: "Error",
          description: "Email is not sent!",
          status: "error",
        });
      }
    } catch (error) {
      resultToast({
        title: "Something is wrong!",
        description: "Email is not sent!",
        status: "error",
      });
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FormControl
        width={{ base: "90vw", sm: "25em" }}
        maxWidth="25em"
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
        type="submit"
        loadingText="Submitting"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        mt={8}
        px={10}
        py={6}
        variant="outline"
        borderRadius="0"
        border="1px solid"
        borderColor="text.main"
        color="text.main"
        bg="transparent"
        letterSpacing="0.16em"
        fontSize="xs"
        textTransform="uppercase"
        _hover={{
          bg: "text.main",
          color: "background.main",
        }}
        transition="background 0.3s ease, color 0.3s ease"
      >
        Send Message
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
          id={id}
          variant={"flushed"}
          placeholder={placeholder}
          {...register(id, {
            required: "This is required!",
          })}
          borderBottom={"1px"}
          borderColor={"secondary.300"}
          focusBorderColor="primary.main"
          fontSize={"md"}
          resize={"none"}
          h={"10em"}
        />
      ) : (
        <Input
          id={id}
          variant={"flushed"}
          placeholder={placeholder}
          {...register(id, {
            required: "This is required",
          })}
          fontSize={"md"}
          borderBottom={"1px"}
          borderColor={"secondary.300"}
          focusBorderColor="primary.main"
        />
      )}
      <FormErrorMessage>
        {errors.name && errors.name.message?.toString()}
      </FormErrorMessage>
    </>
  );
};

const Label = ({ children, id }: LabelProps) => {
  return (
    <FormLabel
      htmlFor={id}
      fontSize={"xs"}
      letterSpacing="0.14em"
      textTransform="uppercase"
      fontWeight={"500"}
      opacity={0.6}
    >
      {children}
    </FormLabel>
  );
};

export default ContactForm;
