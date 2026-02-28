export const site = {
  name: "Koshatech",
  tagline: "Software & AI Engineering Studio",
  description:
    "Koshatech builds modern web and mobile products, plus practical AI capabilities—covering strategy, design, engineering, and long-term support.",
  phone: "+91 8960274119",
  // phoneUSA: "+1 (650) 586-3786",
  email: "sales@koshatech.com",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export type Site = typeof site;
