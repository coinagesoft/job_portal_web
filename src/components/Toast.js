"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success", duration = 3500) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: "fixed", top: "24px", right: "24px",
        zIndex: 99999, display: "flex", flexDirection: "column", gap: "10px"
      }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "14px 18px", borderRadius: "10px",
              minWidth: "280px", maxWidth: "400px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              background: toast.type === "success" ? "#0BAB7C"
                : toast.type === "error" ? "#E53935"
                : toast.type === "warning" ? "#F59E0B"
                : "#1976D2",
              color: "#fff", fontSize: "14px", fontWeight: 500,
              animation: "slideInToast 0.3s ease",
            }}
          >
            <span style={{ fontSize: "18px" }}>
              {toast.type === "success" ? "✓"
                : toast.type === "error" ? "✕"
                : toast.type === "warning" ? "⚠"
                : "ℹ"}
            </span>
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "16px", padding: "0 4px", opacity: 0.8 }}
            >×</button>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slideInToast {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx.showToast;
};
