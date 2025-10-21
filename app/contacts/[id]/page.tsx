import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ContactDetails from "./ContactDetails/ContactDetails";
import { getContactById } from "@/libs/api";

interface Props {
  params: Promise<{ id: string }>;
}

const Contact = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactDetails />
    </HydrationBoundary>
  );
};

export default Contact;
