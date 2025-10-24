import React from "react";

interface Props {
  children: React.ReactNode;
  filters: React.ReactNode;
}

export default function SearchLayout({ children, filters }: Props) {
  console.log(filters);
  return (
    <div>
      {filters}
      {children}
    </div>
  );
}
