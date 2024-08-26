import  useIsClient  from "@/hooks/useIsClient";

const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isClient = useIsClient();

  if (!isClient) {
    return <>{children}</>;
  }

  return null;
};

export default ClientOnly;