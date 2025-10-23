import ContactsList from "@/components/ContactsList/ContactsList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getContacts } from "@/libs/api";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function SearchPage({ params }: Props) {
  const { slug } = await params;
  const contacts = await getContacts(
    slug[0] === "all" ? undefined : slug[0],
    slug[1]
  );
  console.log(slug);
  return (
    <>
      <SearchBar sex={slug[0]} />
      <ContactsList contacts={contacts} />
    </>
  );
}
