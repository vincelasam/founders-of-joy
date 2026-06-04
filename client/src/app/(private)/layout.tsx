"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/features/feed/components/TopNav";
import SidebarLeft from "../../features/feed/components/SidebarLeft";
import SidebarRight from "../../features/feed/components/SidebarRight";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check your AuthContext or localStorage for the token
    const token = localStorage.getItem("token"); // Adjust this if your token key is different

    if (!token) {
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  // Show a blank screen or a loading spinner while checking auth
  if (!isAuthorized) {
    return <div className="min-h-screen bg-cream flex items-center justify-center text-deep">Verifying access...</div>;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. Top Navigation */}
      <TopNav />
      
      {/* 3-Column Grid Layout */}
      <div className="max-w-7xl mx-auto pt-6 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* 2. Left Sidebar (Hidden on mobile) */}
          <div className="hidden md:block col-span-1">
            <div className="sticky top-24">
              <SidebarLeft />
            </div>
          </div>

          {/* Main Feed Content (Passed in from page.tsx) */}
          <main className="col-span-1 md:col-span-2">
            {children}
          </main>

          {/* 3. Right Sidebar (Hidden on mobile) */}
          <div className="hidden md:block col-span-1">
            <div className="sticky top-24">
              <SidebarRight />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}