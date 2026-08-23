import React from "react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/its21yash",
    icon: "uil-github-alt",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/its21yash/",
    icon: "uil-linkedin-alt",
  },
  {
    label: "X",
    href: "https://x.com/lifeof21yash",
    icon: "uil-twitter-alt",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/its21yash/",
    icon: "uil-instagram",
  },
  {
    label: "Buy Me a Coffee",
    href: "https://buymeacoffee.com/its21yash",
    icon: "uil-coffee",
  },
];

const Social = () => {
  return (
    <div className="home__social">
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <i className={`uil ${icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
