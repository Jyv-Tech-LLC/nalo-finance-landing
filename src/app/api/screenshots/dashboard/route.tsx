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
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFC000",
              fontSize: "32px",
              fontWeight: "900",
            }}
          >
            N
          </div>
          <span style={{ fontSize: "36px", fontWeight: "900", color: "#000" }}>
            NALO FINANCE
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "30px",
          }}
        >
          <div
            style={{
              flex: 2,
              background: "#fff",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#000", margin: 0 }}>
              DASHBOARD
            </h2>
            <p style={{ fontSize: "18px", color: "#666", marginTop: "10px" }}>
              Welcome back! Your finances at a glance
            </p>
            <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
              <div style={{ background: "#f5f5f5", padding: "20px", flex: 1 }}>
                <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Total Balance</p>
                <p style={{ fontSize: "32px", fontWeight: "900", color: "#000", margin: 0 }}>₦2.4M</p>
              </div>
              <div style={{ background: "#f5f5f5", padding: "20px", flex: 1 }}>
                <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>This Month</p>
                <p style={{ fontSize: "32px", fontWeight: "900", color: "#22C55E", margin: 0 }}>+₦450K</p>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              background: "#000",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "900", color: "#FFC000", margin: 0 }}>
              AJO GROUPS
            </h3>
            <p style={{ fontSize: "48px", fontWeight: "900", color: "#fff", marginTop: "20px" }}>
              3
            </p>
            <p style={{ fontSize: "14px", color: "#888" }}>Active Groups</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
    }
  );
}
