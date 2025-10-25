import PropTypes from 'prop-types';
import { CONTACT } from '../constants';

const Contact = ({ theme }) => {
  return (
    <section id="contactSection" className="mt-16 pt-6 pb-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className={`${theme === 'dark' ? 'text-neutral-200' : 'text-gray-700'} text-3xl md:text-4xl font-bold text-center mb-8`}>
          Contact
        </h2>

        <div className={`rounded-lg p-6 ${theme === 'dark' ? 'bg-neutral-800 text-neutral-100' : 'bg-white text-gray-900'} shadow-md` }>
          <p className="mb-4">
            <strong className="mr-2">Address:</strong>
            <span>{CONTACT.address}</span>
          </p>
          <p className="mb-4">
            <strong className="mr-2">Phone:</strong>
            <a href={`tel:${CONTACT.phoneNo}`} className={`${theme === 'dark' ? 'text-neutral-200' : 'text-gray-800'} underline`}>{CONTACT.phoneNo}</a>
          </p>
          {CONTACT.whatsapp && CONTACT.whatsapp.length > 0 && (
            <p className="mb-4">
              <strong className="mr-2">WhatsApp:</strong>
              {CONTACT.whatsapp.map((w, idx) => (
                <span key={idx} className="mr-3">
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === 'dark' ? 'text-neutral-200' : 'text-gray-800'} underline`}
                    aria-label={`Open WhatsApp chat with ${w.display}`}
                  >
                    {w.display}
                  </a>
                </span>
              ))}
            </p>
          )}
          {CONTACT.whatsappCA && (
            <p className="mb-4">
              <strong className="mr-2">WhatsApp (CA):</strong>
              <a
                href={`https://wa.me/${CONTACT.whatsappCA.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-neutral-200' : 'text-gray-800'} underline`}
              >
                {CONTACT.whatsappCA}
              </a>
            </p>
          )}
          <p className="mb-4">
            <strong className="mr-2">Email:</strong>
            <a href={`mailto:${CONTACT.email}`} className={`${theme === 'dark' ? 'text-neutral-200' : 'text-gray-800'} underline`}>{CONTACT.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  theme: PropTypes.string,
};

export default Contact;
