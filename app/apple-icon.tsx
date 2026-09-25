import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#C1121F",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 90,
            lineHeight: 1,
            color: "#FDF0D5",
          }}
        >
          T
          <span style={{ color: "#669BBC", marginLeft: 4 }}>♥</span>
        </div>
      </div>
    ),
    { ...size }
  );
}