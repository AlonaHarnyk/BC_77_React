import { getContactById } from "@/libs/api";

interface Props {
  params: Promise<{ id: string }>;
}

const ContactDetails = async ({ params }: Props) => {
  const { id } = await params;
  const contact = await getContactById(id);
  return (
    <div>
      {contact && (
        <>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.number}</p>
          <p>{contact.description}</p>
        </>
      )}
    </div>
  );
};

export default ContactDetails;
