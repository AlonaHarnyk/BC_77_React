import React from "react";

interface Props {
  children: React.ReactNode;
  filters: React.ReactNode;
}

export default function SearchLayout({ children, filters }: Props) {
  return (
    <div>
      {filters}
      {children}
    </div>
  );
}
