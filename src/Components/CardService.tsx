export const CardService = ({ children }: CardServiceProps) => {
  return (
    <div
      className="w-full md:w-1/3 h-40 border-2 border-green-600 rounded-2xl 
                    flex flex-col justify-center p-4 
                    "
    >
      {children}
    </div>
  );
};

interface CardServiceProps {
  children: React.ReactNode;
}
