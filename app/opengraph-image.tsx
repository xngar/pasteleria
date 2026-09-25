import { ImageResponse } from "next/og";

export const alt =
  "Treato – Helados, postres y repostería a domicilio. Tus caprichos, directo a tu puerta.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          padding: 72,
          background: "linear-gradient(135deg, #FDF0D5 0%, #E7EEF2 55%, #669BBC 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 128,
            lineHeight: 1,
            color: "#C1121F",
          }}
        >
          Aquí, la felicidad
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 150,
            lineHeight: 1,
            color: "#003049",
            marginTop: 8,
          }}
        >
          SE DERRITE
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: 64,
            lineHeight: 1,
            color: "#C1121F",
            marginTop: 20,
          }}
        >
          en cada bola <span style={{ color: "#C1121F", marginLeft: 12, fontSize: 72 }}>♥</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: 30,
            letterSpacing: 6,
            color: "#4A6A80",
          }}
        >
          DULCE · SALADO · SONRISAS — treato.com
        </div>
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 48,
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 34,
            color: "#C1121F",
          }}
        >
          Treato ♥
        </div>
      </div>
    ),
    { ...size }
  );
}