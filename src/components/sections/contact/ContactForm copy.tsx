import Input from './Input';

interface ContactFormProps {
    id?: string,
    method?: 'get' | 'post',
    action?: string
}

function ContactForm({id, method, action}:ContactFormProps) {

    
    return (
        <form id={id} method={method} action={action}>
            <Input label="Name" name="name" required={true} />
            <Input label="Email" type="email" name="email" required={true} />
            <Input label="Message" type="textarea" name="message" required={true} />
            <Input type="submit" />
        </form>
    )
};

export default ContactForm;