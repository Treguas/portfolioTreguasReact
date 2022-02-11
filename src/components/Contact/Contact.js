import { contact } from '../../portfolio';
import EmailIcon from '@material-ui/icons/Email';
import './Contact.css';

export const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contato</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
        </span>
          <EmailIcon />
      </a>
    </section>
  )
}