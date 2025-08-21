import Input from './Input';

// Contact Form
// async function postData(form: HTMLFormElement) {
//     let emailContents = new FormData();
//     form.querySelectorAll<HTMLInputElement>('input, textarea').forEach((i) => {
//         if (i.type !== 'submit') emailContents.append(i.name, i.value);
//     });

//     const url = "templates/mailer-smtp.php";
//     try {
//         form.querySelectorAll<HTMLElement>('.input-wrap:not(.submit-wrap)').forEach((wrap) => {
//             wrap.classList.add('disabled');
//             (<HTMLInputElement>wrap.querySelector('input, textarea')).setAttribute('disabled','disabled');
//         });
//         document.querySelector('.submit-wrap')?.classList.add('waiting');
        
//         const response = await fetch(url, {
//             method: "POST",
//             body: emailContents
//         });
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         } else {
//             // debug using timeout
//             // setTimeout(()=> {
//                 document.querySelector('.submit-wrap')?.classList.remove('waiting');
//                 (<HTMLInputElement>document.getElementById('submit')).value = "Thank You!";
//             // }, 2000);

//             setTimeout(()=> {
//                 form.querySelectorAll<HTMLElement>('.input-wrap').forEach((wrap) => {
//                     wrap.classList.remove('disabled');
//                     wrap.querySelector('input, textarea')?.removeAttribute('disabled');
//                     wrap.querySelector<HTMLInputElement>('input, textarea')!.value = '';
//                 });
//                 (<HTMLInputElement>document.getElementById('submit')).value = "Submit";
//             },3000);
//         }
  
//         // console.log(await response);
//     } catch (error: any) {
//         console.error(error.message);
//     }

// }


interface ContactFormProps {
    id?: string,
    method?: 'get' | 'post',
    action?: string
}

const ContactForm = ({id, method, action}:ContactFormProps) => {

    // TODO: break out submit action from main js
    
    return (
        <form id={id} name={id} method={method} action={action}>
            <Input type="hidden" name={id} value="contact-form" />
            <Input labeledBy="Name" type="text" required={true} />
            <Input labeledBy="Email" type="email" required={true} />
            <Input labeledBy="Message" type="textarea" required={true} />
            <Input type="submit" />
        </form>

    )
};

export default ContactForm;