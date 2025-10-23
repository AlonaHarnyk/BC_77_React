import ContactsList from "@/components/ContactsList/ContactsList";
import { getContacts } from "@/libs/api";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function SearchPage({ params }: Props) {
  const { slug } = await params;
  const contacts = await getContacts(slug[0]);

  return <ContactsList contacts={contacts} />;
}
