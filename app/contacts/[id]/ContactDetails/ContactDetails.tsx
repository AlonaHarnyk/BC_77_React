"use client";

import { getContactById } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

const ContactDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["contact"],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });
  return (
    <div>
      {data && (
        <>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.number}</p>
          <p>{data.description}</p>
        </>
      )}
    </div>
  );
};

export default ContactDetails;
