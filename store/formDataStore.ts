import { ContactData } from "@/libs/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialContact: ContactData = {
  city: "",
  description: "",
  email: "",
  job: "",
  name: "",
  number: "",
};

interface FormDataStore {
  data: ContactData;
  setData: (newContactData: ContactData) => void;
  clearData: () => void;
}

export const useFormDataStore = create<FormDataStore>()(
  persist(
    (set) => ({
      data: initialContact,
      setData: (newContactData: ContactData) => set({ data: newContactData }),
      clearData: () => set({ data: initialContact }),
    }),
    {
      name: "data",
      partialize(state) {
        return { data: state.data };
      },
    }
  )
);
