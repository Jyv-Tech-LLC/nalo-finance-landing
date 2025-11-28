import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nalo Finance - Your Personal Finance Operating System",
    short_name: "Nalo Finance",
    description:
      "Nigeria's all-in-one personal finance platform. Manage Ajo groups, calculate taxes, track income streams, budget smarter, and achieve your financial goals.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FFC000",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-NG",
    categories: ["finance", "productivity", "utilities"],
    icons: [
      {
        src: "/api/icons/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/api/icons/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/api/icons/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/api/icons/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/api/screenshots/dashboard",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Nalo Finance Dashboard",
      },
      {
        src: "/api/screenshots/mobile",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
        label: "Nalo Finance Mobile",
      },
    ],
    shortcuts: [
      {
        name: "Ajo Groups",
        short_name: "Ajo",
        description: "Manage your Ajo contribution groups",
        url: "/features/ajo-groups",
        icons: [{ src: "/api/icons/ajo", sizes: "192x192" }],
      },
      {
        name: "Tax Calculator",
        short_name: "Tax",
        description: "Calculate your Nigerian taxes",
        url: "/features/tax-center",
        icons: [{ src: "/api/icons/tax", sizes: "192x192" }],
      },
      {
        name: "Budgeting",
        short_name: "Budget",
        description: "Track your spending and budget",
        url: "/features/budgeting",
        icons: [{ src: "/api/icons/budget", sizes: "192x192" }],
      },
    ],
    related_applications: [
      {
        platform: "webapp",
        url: "https://app.nalofinance.com",
      },
    ],
    prefer_related_applications: false,
  };
}
