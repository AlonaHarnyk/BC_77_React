import ContactsList from "@/components/ContactsList/ContactsList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getContacts } from "@/libs/api";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = slug[0];
  return {
    title: category === "all" ? "All" : `Has Job: ${category}`,
    description: `Contacts by filters: ${slug.join(", ")}`,
  };
}

export default async function SearchPage({ params }: Props) {
  const { slug } = await params;
  const contacts = await getContacts(
    slug[0] === "all" ? undefined : slug[0],
    slug[1]
  );

  return (
    <>
      <SearchBar sex={slug[0]} />
      <ContactsList contacts={contacts} />
    </>
  );
}
