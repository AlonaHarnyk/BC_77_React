import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as yup from "yup";
import css from "./AddContactForm.module.css";
import type { HobbiesValues } from "../types/contact";
import { addContact, type ContactData } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface FormValues {
  birthDay: Date;
  city: string;
  name: string;
  email: string;
  hasJob: string;
  number: string;
  job: string;
  hobbies: HobbiesValues[];
  description: string;
  sex: "male" | "female";
}

const initialValue: FormValues = {
  birthDay: new Date(),
  city: "",
  name: "",
  email: "",
  hasJob: "false",
  number: "",
  job: "",
  hobbies: [],
  description: "",
  sex: "male",
};

const contactSchema = yup.object({
  birthDay: yup.date().min(new Date(1900, 0, 1)).required(),
  city: yup.string(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  hasJob: yup.string(),
  number: yup.string().required(),
  job: yup.string(),
  hobbies: yup
    .array()
    .of(
      yup
        .string()
        .oneOf([
          "hiking",
          "fishing",
          "travel",
          "rest",
          "sport",
          "learning",
          "sing",
          "dance",
          "shopping",
        ])
    ),
  description: yup.string().max(300),
  sex: yup.string().oneOf(["male", "female"]).required(),
});

interface Props {}
export function AddContactForm({ }: Props) {
  const queryClient = useQueryClient();
	
  const { mutate } = useMutation({
    mutationFn: (contactData: ContactData) => addContact(contactData),

    onSuccess: () => {
      console.log("Contact added successfully");
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
  const onSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const data = { ...values, hasJob: values?.hasJob === "yes" ? true : false };
    mutate(data);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      validationSchema={contactSchema}
      onSubmit={onSubmit}
      initialValues={initialValue}
    >
      <Form>
        <label>
          Name*:
          <Field type="text" name="name" />
        </label>
        <ErrorMessage component="span" className={css.error} name="name" />
        <label>
          Email*:
          <Field type="email" name="email" />
        </label>
        <ErrorMessage component="span" className={css.error} name="email" />
        <label>
          Phone*:
          <Field type="text" name="number" />
        </label>
        <ErrorMessage component="span" className={css.error} name="number" />
        <label>
          City:
          <Field type="text" name="city" />
        </label>
        <ErrorMessage component="span" className={css.error} name="city" />
        <label>
          Job:
          <Field type="text" name="job" />
        </label>
        <ErrorMessage component="span" className={css.error} name="job" />
        <label>
          Birth Date*:
          <Field type="date" name="birthDay" />
        </label>
        <ErrorMessage component="span" className={css.error} name="birthDay" />

        <fieldset>
          <legend>Contact has a job?</legend>
          <label>
            <Field type="radio" name="hasJob" value="yes" />
            Yes
          </label>
          <label>
            <Field type="radio" name="hasJob" value="no" />
            No
          </label>
          <ErrorMessage component="span" className={css.error} name="hasJob" />
        </fieldset>

        <label>
          <Field as="select" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </label>
        <ErrorMessage component="span" className={css.error} name="sex" />

        <fieldset>
          <legend>Hobbies</legend>
          <label>
            <Field type="checkbox" name="hobbies" value="hiking" />
            Hiking
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="fishing" />
            Fishing
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="travel" />
            Travel
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="rest" />
            Active rest
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="sport" />
            Sport
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="learning" />
            Learn in GoIT
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="sing" />
            Singing
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="dance" />
            Dancing
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="shopping" />
            Shopping
          </label>
          <ErrorMessage component="span" className={css.error} name="hobbies" />
        </fieldset>

        <label htmlFor="description">
          Description
          <textarea name="description"></textarea>
        </label>
        <ErrorMessage
          component="span"
          className={css.error}
          name="description"
        />

        <button>Add</button>
      </Form>
    </Formik>
  );
}
