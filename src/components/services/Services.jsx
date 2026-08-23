import React, { useState } from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    icon: "uil-web-grid",
    titleLines: ["Frontend", "Architecture"],
    modalTitle: "Frontend Architecture",
    description:
      "I design scalable frontend architectures for production SaaS products and lead their implementation end to end.",
    points: [
      "Architect Next.js and React applications built to scale.",
      "Build reusable, accessible component systems.",
      "Manage state with Zustand and React Query.",
      "Document frontend standards and Git/GitHub workflows.",
      "Lead code reviews and guide implementation decisions.",
    ],
  },
  {
    id: 2,
    icon: "uil-mobile-android",
    titleLines: ["Web & Mobile", "Development"],
    modalTitle: "Web & Mobile Development",
    description:
      "I ship responsive web and cross-platform mobile applications from a single, shared codebase.",
    points: [
      "Build responsive web apps with Next.js and TypeScript.",
      "Develop mobile apps with Expo and React Native.",
      "Share code across web and mobile in a monorepo.",
      "Style interfaces with Tailwind CSS and ShadCN.",
      "Deploy to Vercel, Netlify, and app stores.",
    ],
  },
  {
    id: 3,
    icon: "uil-server-network",
    titleLines: ["Full-Stack", "Integration"],
    modalTitle: "Full-Stack Integration",
    description:
      "I connect polished interfaces to real data, wiring up APIs, databases, and authentication.",
    points: [
      "Integrate REST APIs and backend services.",
      "Model and query data with Prisma and MongoDB.",
      "Add authentication with Supabase, Firebase, and Kinde.",
      "Build API routes and server logic with Node.js.",
      "Set up CI/CD pipelines for production releases.",
    ],
  },
];

const Services = () => {
  const [activeModal, setActiveModal] = useState(0);

  const handleToggleModal = (id) => setActiveModal(id);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map(
          ({ id, icon, titleLines, modalTitle, description, points }) => (
            <div className="services__content" key={id}>
              <div>
                <i className={`uil ${icon} services__icon`}></i>
                <h3 className="services__title">
                  {titleLines[0]} <br /> {titleLines[1]}
                </h3>
              </div>

              <span
                className="services__button"
                role="button"
                tabIndex={0}
                aria-label={`View more about ${modalTitle}`}
                onClick={() => handleToggleModal(id)}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  handleToggleModal(id);
                }}
              >
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={
                  activeModal === id
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    role="button"
                    tabIndex={0}
                    aria-label={`Close ${modalTitle} details`}
                    onClick={() => handleToggleModal(0)}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();
                      handleToggleModal(0);
                    }}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">{modalTitle}</h3>
                  <p className="services__modal-description">{description}</p>
                  <ul className="services__modal-services grid">
                    {points.map((point) => (
                      <li className="services__modal-service" key={point}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
