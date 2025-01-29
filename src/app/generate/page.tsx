"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function GeneratePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setHasPaid } = useAuth();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (sessionId) {
      // Verify the session with your backend if needed
      setHasPaid(true);
      router.push("/");
    }
  }, [searchParams, router, setHasPaid]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-lg text-white/70">Confirming your payment...</p>
      </div>
    </div>
  );
}
