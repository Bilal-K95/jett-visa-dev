import I18nProvider from "@/components/I18nProvider";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
