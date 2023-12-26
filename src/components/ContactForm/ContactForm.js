import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button, ErrorMsg, Label, StyledForm } from './ContactForm.styled';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const contactsSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, 'Too Short!')
  .required('Required'),
  number: Yup.number()
    .positive('Must be positive!')
    .required('Required'),
});


export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts)
  
  return (
    <Formik
       initialValues={{ name: '', number: '' }}
       validationSchema = {contactsSchema}
       onSubmit={(values, actions) => {
        const checkContact = items.some(
          item => item.name.toLowerCase() === values.name.toLowerCase()
        );
        
        if(checkContact) {
          alert(`${values.name} is already in contacts`);
        } else {
        dispatch(addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
          }));
        }
      
        actions.resetForm();
      }}
     >
       {() => (
         <StyledForm>
          <Label>
            Name
            <Field type="text" name="name" />
            <ErrorMsg name="name" component="div" />
          </Label>
           <Label>
            Number 
           <Field type="tel" name="number" />
           <ErrorMsg name="number" component="div" />
           </Label>
           <Button type="submit">
             Add contact
           </Button>
         </StyledForm>
       )}
     </Formik>)
}