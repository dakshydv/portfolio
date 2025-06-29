import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div
      className={`min-h-screen bg-white dark:bg-[#171717] flex items-start justify-start`}
    >
      <Container className="min-h-screen w-4xl p-4 pt-15 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>
          I am open to freelance offers. Reach out to me to enquire more about
          my work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
