import ContactDetails from "./ContactDetails/ContactDetails";

interface Props {
  params: Promise<{ id: string }>;
}

const Contact = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);
  return <ContactDetails />;
};

export default Contact;
