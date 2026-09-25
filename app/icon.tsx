import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#C1121F",
          borderRadius: 96,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 240,
            lineHeight: 1,
            color: "#FDF0D5",
            textShadow: "0 6px 18px rgba(44,24,16,0.35)",
          }}
        >
          T
          <span style={{ color: "#669BBC", marginLeft: 12 }}>♥</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: 8,
            color: "#FDF0D5",
            opacity: 0.92,
          }}
        >
          DULCE · SALADO · SONRISAS
        </div>
      </div>
    ),
    { ...size }
  );
}