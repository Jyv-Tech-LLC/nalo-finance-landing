import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oracle AI - Your Personal Financial Advisor | Nalo Finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OracleOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F97316",
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
              color: "#F97316",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            AI Feature
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
            Oracle AI
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
            Your Personal AI Financial Advisor
          </p>
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "auto" }}>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#F97316",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Nigerian Context
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#F97316",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            24/7 Advice
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#F97316",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Tax & Investment Tips
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
