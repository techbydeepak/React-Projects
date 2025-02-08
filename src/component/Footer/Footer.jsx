import React from 'react';
import { Link } from 'react-router-dom';

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
      <ul className="text-gray-500 font-medium">
        {links.map((link, index) => (
          <li className="mb-4" key={index}>
            <Link to={link.path} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const resourceLinks = [{ path: '/', label: 'Home' }, { path: '/about', label: 'About' }];
  const followLinks = [
    { path: 'https://github.com/hiteshchoudhary', label: 'Github' },
    { path: '/', label: 'Discord' },
  ];
  const legalLinks = [{ path: '#', label: 'Privacy Policy' }, { path: '#', label: 'Terms & Conditions' }];

  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterLinkGroup title="Resources" links={resourceLinks} />
            <FooterLinkGroup title="Follow us" links={followLinks} />
            <FooterLinkGroup title="Legal" links={legalLinks} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()} <a href="https://hiteshchoudhary.com/" className="hover:underline"> hiteshchoudhary</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
