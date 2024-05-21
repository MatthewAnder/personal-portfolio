interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

import {
  Body,
  Container,
  Head,
  Heading,
  Text,
  Html,
  Preview,
} from "@react-email/components";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>A Message from Your Personal Portfolio</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Message</Heading>
        <Text>
          From {name} ({email})
        </Text>

        <code style={code}>{message}</code>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
