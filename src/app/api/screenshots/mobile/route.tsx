import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFC000",
          padding: "40px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#000",
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
          <span style={{ fontSize: "28px", fontWeight: "900", color: "#000" }}>
            NALO
          </span>
        </div>

        <div
          style={{
            flex: 1,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
          }}
        >
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#000", margin: 0, textAlign: "center" }}>
            YOUR AJO
          </h2>
          <p style={{ fontSize: "16px", color: "#666", textAlign: "center", marginTop: "10px" }}>
            Family Savings Group
          </p>
          
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Total Pool</p>
            <p style={{ fontSize: "48px", fontWeight: "900", color: "#000", margin: 0 }}>₦400,000</p>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Members</p>
              <p style={{ fontSize: "28px", fontWeight: "900", color: "#000", margin: 0 }}>8</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Trust Score</p>
              <p style={{ fontSize: "28px", fontWeight: "900", color: "#22C55E", margin: 0 }}>8.9</p>
            </div>
          </div>
          
          <div
            style={{
              marginTop: "auto",
              background: "#FFC000",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "18px", fontWeight: "900", color: "#000", margin: 0 }}>
              Next: Chiamaka O. - ₦50,000
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 750,
      height: 1334,
    }
  );
}
