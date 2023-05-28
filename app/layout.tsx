import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "Quote Generator",
  description: "Full stack project for fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
