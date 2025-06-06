import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/context/DataContext";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TSA challenges",
  description: "TSA javascript challenge made for weekly chanllenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
