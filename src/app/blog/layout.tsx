import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Nalo Finance Blog",
    default: "Blog | Nalo Finance",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
