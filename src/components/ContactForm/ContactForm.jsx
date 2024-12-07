import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { selectContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${values.name} is already in contacts!`);
      return;
    }
    dispatch(addContact({ id: Date.now().toString(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.formContact}>
          <div>
            <label htmlFor="name" className={css.labelContact}>Name</label>
            <Field className={css.field} type="text" id="name" name="name" placeholder="Enter name" />
            <ErrorMessage name="name" component="div" className={css.errorMessage} />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field
              className={css.field}
              type="text"
              id="number"
              name="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage name="number" className={css.errorMessage} />
          </div>
          <button type="submit" className={css.buttonAdd}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;