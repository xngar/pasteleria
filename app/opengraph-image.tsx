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
          background: "linear-gradient(135deg, #FFF8F0 0%, #FFE3EC 55%, #FFB5C9 100%)",
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
            color: "#D64045",
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
            color: "#3D2B1F",
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
            color: "#D64045",
            marginTop: 20,
          }}
        >
          en cada bola <span style={{ color: "#FF2D7A", marginLeft: 12, fontSize: 72 }}>♥</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: 30,
            letterSpacing: 6,
            color: "#5C4A3D",
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
            color: "#FF2D7A",
          }}
        >
          Treato ♥
        </div>
      </div>
    ),
    { ...size }
  );
}