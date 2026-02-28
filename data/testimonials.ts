export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  title: string;
  rating: number;
  quote: string;
  image?:string
}

export const testimonialsIntro = {
  title: "Reviews",
  sectionTitle: "What clients say about working with us",
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Homofix",
    role: "Company",
    company: "Homofix Company",
    title: "Exceptional service and outstanding results",
    image: "/Homofix.png",
    rating: 5,
    quote:
      "Koshatech delivered an exceptional solution that exceeded our expectations. Their team demonstrated professionalism, technical expertise, and a deep understanding of our business needs. The project was completed on time with high-quality results that have significantly improved our operations.",
  },
];
