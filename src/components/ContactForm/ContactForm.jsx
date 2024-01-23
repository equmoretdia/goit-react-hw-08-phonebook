import PropTypes from 'prop-types';

import Loader from '../Loader';

import { Form, Label, Input, Button } from './ContactFormStyles';

const ContactForm = ({
  name,
  number,
  handleChange,
  handleSubmit,
  isLoading,
  buttonText,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="">
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">
        {isLoading ? (
          <Loader
            height={'16'}
            width={'16'}
            colors={['#e3e3ee', '#e3e3ee']}
            size={'s'}
          />
        ) : (
          buttonText
        )}
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ContactForm;
