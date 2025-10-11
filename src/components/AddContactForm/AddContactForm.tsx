import { Formik, Form, Field } from "formik";

interface Props {}
export function AddContactForm({}: Props) {
  const onSubmit = (values: any) => {
    // const name = formData.get("name") as string;
    // const email = formData.get("email") as string;
    // const isOnline = formData.get("isOnline") as string;
    // const userData = { name, email, isOnline };
    // addUser(userData);

    console.log(values);
  };

  const initialValue = {
    birthDay: "",
    city: "",
    name: "",
    email: "",
    hasJob: false,
    number: "",
    job: "",
    hobbies: [],
    description: "",
    sex: "",
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValue}>
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <label>
          Phone:
          <Field type="text" name="number" />
        </label>
        <label>
          City:
          <Field type="text" name="city" />
        </label>
        <label>
          Job:
          <Field type="text" name="job" />
        </label>
        <label>
          Birth Date:
          <Field type="date" name="birthDay" />
        </label>

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
        </fieldset>

        <label>
          <Field as="select" name="sex" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </label>

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
        </fieldset>

        <label htmlFor="description">
          Description
          <textarea name="description"></textarea>
        </label>

        <button>Add</button>
      </Form>
    </Formik>
  );
}
