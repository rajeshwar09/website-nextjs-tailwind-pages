"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import ClientOnly from "@/hooks/ClientOnly";

const ClientLayout = ({ children }: any) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return isLoading && isHome ? (
    <ClientOnly>
      <SplashScreen finishLoading={() => setIsLoading(false)} />
    </ClientOnly>
  ) : (
    <>{children}</>
  );
};

export default ClientLayout;