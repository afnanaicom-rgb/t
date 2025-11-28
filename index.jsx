import React from "react";

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "Cairo, sans-serif",
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
        minHeight: "100vh",
        textAlign: "center",
        padding: "100px 20px",
        color: "#2c3e50",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#1abc9c" }}>مرحباً بك في صفحة التسجيل</h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        اكتشف جمال مصر وتاريخها العريق، وسجّل معنا لتتعرف أكثر على المعالم السياحية 🌍✨
      </p>
      <button
        style={{
          background: "#16a085",
          color: "white",
          border: "none",
          padding: "15px 40px",
          borderRadius: "10px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onClick={() => alert("تم التسجيل بنجاح! 🎉")}
      >
        تأكيد التسجيل
      </button>
    </div>
  );
}
