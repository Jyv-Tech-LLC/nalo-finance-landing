import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Smart Budgeting - Zero-Sum Budget Planning | Nalo Finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BudgetingOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#A855F7",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFC000",
                fontSize: "24px",
                fontWeight: "900",
              }}
            >
              N
            </div>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#fff" }}>
              NALO FINANCE
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#A855F7",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            Feature
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#fff",
              lineHeight: 1.1,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Smart Budgeting
          </h1>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#fff",
              opacity: 0.9,
              marginTop: "20px",
            }}
          >
            Zero-Sum Budget Planning with AI Insights
          </p>
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "auto" }}>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#A855F7",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Expense Tracking
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#A855F7",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Category Analysis
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#A855F7",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Smart Alerts
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
