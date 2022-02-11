import { header } from '../../portfolio';
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    const { homepage, title, linkedin } = header;
    
    return (
        <header className='header center'>
          <h3>
            {homepage ? (
              <a href={linkedin} className='link' target="_blank">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <Navbar />
        </header>
      )
}