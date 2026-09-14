export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://harshitsewlikar.dev/#person",
      name: "Harshit Sewlikar",
      description:
        "Computer Engineering graduate and aspiring full-stack software developer based in Pune, Maharashtra, India. Builds practical software with Python, Django, React and SQL.",
      jobTitle: "Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chinchwad, Pune",
        addressRegion: "Maharashtra",
        addressCountry: "India",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Siddhant College of Engineering, Pune",
      },
      knowsAbout: [
        "Python",
        "Django",
        "React",
        "SQL",
        "JavaScript",
        "FastAPI",
        "Pandas",
        "REST APIs",
        "Data Structures & Algorithms",
        "Full-Stack Development",
        "Backend Development",
      ],
      sameAs: [
        "https://github.com/HarshitSewlikar",
        "https://www.linkedin.com/in/harshitsewlikar",
      ],
      url: "https://harshitsewlikar.dev/",
      email: "mailto:HarshitSewlikar@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://harshitsewlikar.dev/#website",
      url: "https://harshitsewlikar.dev/",
      name: "Harshit Sewlikar — Portfolio",
      publisher: { "@id": "https://harshitsewlikar.dev/#person" },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://harshitsewlikar.dev/#profilepage",
      url: "https://harshitsewlikar.dev/",
      mainEntity: { "@id": "https://harshitsewlikar.dev/#person" },
    },
  ],
}
