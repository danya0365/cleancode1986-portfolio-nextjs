"use client";

import { AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function LoginContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const sessionId = searchParams.get("sessionId");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      const targetUrl = sessionId ? `/admin/chat?sessionId=${sessionId}` : "/admin/chat";
      // Consume the magic link via NextAuth Credentials Provider
      signIn("credentials", {
        token,
        redirect: true,
        redirectTo: targetUrl,
      }).catch((reqErr) => {
        console.error(reqErr);
        setError("ลิงก์เข้าสู่ระบบหมดอายุหรือไม่ถูกต้อง (Invalid or Expired Token)");
      });
    }
  }, [token, sessionId]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center border border-red-100">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-800 mb-2">เข้าสู่ระบบไม่สำเร็จ</h1>
          <p className="text-sm text-gray-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  // If no token at all, show standard future login form placeholder
  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-sm w-full border border-gray-200 text-center">
          <ShieldCheck className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-800 mb-2">Admin Login</h1>
          <p className="text-sm text-gray-500 mb-6">
            เข้าสู่ระบบผ่านลิงก์ที่ส่งให้ทาง LINE
          </p>
          <div className="text-xs text-gray-400 border-t pt-4">
            (Username/Password Login Form arriving in future update)
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4 text-indigo-600">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="text-sm font-medium">กำลังตรวจสอบสิทธิ์เข้าถึง...</p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
