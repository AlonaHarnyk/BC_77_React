import React from "react";

interface PhoneNumberProps {
  phoneNumber: string;
}

export default function PhoneNumber({ phoneNumber }: PhoneNumberProps) {
  return (
    <div>
      <p>Phone number of selected contact: {phoneNumber}</p>
    </div>
  );
}
