import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nalo Finance - Your Personal Finance Operating System";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFC000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.1,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -50,
              left: -50,
              width: 300,
              height: 300,
              background: "#000",
              transform: "rotate(12deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -50,
              right: -50,
              width: 350,
              height: 350,
              background: "#000",
              transform: "rotate(-6deg)",
            }}
          />
        </div>

        {/* Logo/Icon */}
        <div
          style={{
            width: 100,
            height: 100,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.3)",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFC000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          NALO FINANCE
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#000",
            opacity: 0.8,
            marginTop: 16,
          }}
        >
          Nigeria's #1 Personal Finance Platform
        </div>

        {/* CTA Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 40,
            background: "#000",
            padding: "16px 32px",
          }}
        >
          <span
            style={{
              color: "#FFC000",
              fontSize: 20,
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Ajo Groups • Tax Calculator • Budgeting • Oracle AI
          </span>
        </div>

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#000",
              opacity: 0.6,
            }}
          >
            @nalofinance
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#000",
              opacity: 0.4,
            }}
          >
            •
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#000",
              opacity: 0.6,
            }}
          >
            nalofinance.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
