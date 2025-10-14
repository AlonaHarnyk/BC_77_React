import type { Contact } from "../types/contact";
// import css from "./Modal.module.css";

interface ModalProps {
  contact: Contact;
  onClose: () => void;
}

const Modal = ({ contact, onClose }: ModalProps) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>Name :{contact.name}</h2>
      <p>Number: {contact.number}</p>
      <p>City: {contact.city}</p>
      <p>Email: {contact.email}</p>
      <p>Job: {contact.job}</p>
    </div>
  );
};

export default Modal;
