"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#fafafa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div style={{ maxWidth: "500px", textAlign: "center" }}>
            {/* Error Box */}
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#ef4444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
                color: "#0a0a0a",
              }}
            >
              Critical Error
            </h1>

            {/* Message */}
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#737373",
                marginBottom: "2rem",
              }}
            >
              Something went seriously wrong. We apologize for the inconvenience.
            </p>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <button
                onClick={reset}
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "#0a0a0a",
                  color: "white",
                  border: "4px solid #0a0a0a",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "4px 4px 0px 0px #FFC000",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translate(2px, 2px)";
                  e.currentTarget.style.boxShadow = "2px 2px 0px 0px #FFC000";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px #FFC000";
                }}
              >
                Try Again
              </button>

              <a
                href="/"
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "transparent",
                  color: "#0a0a0a",
                  border: "4px solid #e5e5e5",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Go Home
              </a>
            </div>

            {/* Support */}
            <div
              style={{
                marginTop: "3rem",
                padding: "1.5rem",
                backgroundColor: "#f5f5f5",
                border: "4px solid #e5e5e5",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#737373",
                  marginBottom: "0.5rem",
                }}
              >
                Need Help?
              </p>
              <a
                href="mailto:hello@nalofinance.com"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#FFC000",
                  textDecoration: "none",
                }}
              >
                hello@nalofinance.com
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
