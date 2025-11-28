import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Nalo Finance Blog",
    default: "Blog | Nalo Finance",
  },
  description:
    "Expert advice on personal finance, budgeting, taxes, investing, and building wealth in Nigeria. Learn from the Nalo Finance team.",
  alternates: {
    canonical: "https://nalofinance.com/blog",
  },
  openGraph: {
    title: "Blog - Financial Tips & Insights | Nalo Finance",
    description:
      "Expert advice on personal finance, budgeting, taxes, investing, and building wealth in Nigeria.",
    type: "website",
    url: "https://nalofinance.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
