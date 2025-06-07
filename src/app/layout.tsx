import "./globals.css";
// import type { Metadata } from "next";

export const metadata = {
  title: "Угадай флаг | Flag Guesser",
  description: "Игра 'Угадай чей флаг?' — тренируй знание стран!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
