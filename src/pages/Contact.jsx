import { FaLinkedinIn, FaGithub, FaKaggle, FaWhatsapp, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: <FaLinkedinIn size={32} />,
      url: 'https://www.linkedin.com/in/zohaib-ul-hassan-66aba22ba/',
      bg: 'bg-blue-600',
    },
    {
      id: 2,
      name: 'GitHub',
      icon: <FaGithub size={32} />,
      url: 'https://github.com/Zohaibuhassan',
      bg: 'bg-gray-800',
    },
    {
      id: 3,
      name: 'Kaggle',
      icon: <FaKaggle size={32} />,
      url: 'https://www.kaggle.com/zohaibumhassan',
      bg: 'bg-sky-600',
    },
    {
      id: 4,
      name: 'Discord',
      icon: <FaDiscord size={32} />,
      url: 'https://discord.com/channels/@me/1401817851853148252',
      bg: 'bg-indigo-600',
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>
        <p className="text-lg text-gray-300 mb-10">
          Feel free to connect with me on the following platforms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer ${contact.bg}`}
            >
              <div className="mb-3">{contact.icon}</div>
              <span className="text-sm font-medium">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
