import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nigeria Company Income Tax Calculator - CIT & SME Exemption";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function CITOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#3B82F6",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
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
              color: "#3B82F6",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            Free Tool
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "900",
              color: "#fff",
              lineHeight: 1.1,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Nigeria Company Income Tax Calculator
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
            Check SME Exemption Eligibility
          </p>
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              color: "#3B82F6",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            0% Small Company
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#3B82F6",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            20% Medium
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#3B82F6",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            30% Large
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
