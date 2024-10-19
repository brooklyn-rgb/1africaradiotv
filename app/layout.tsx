import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Chat from "./pages/chat/page";
import Hero from "./components/Hero";
import Radio from "./pages/radio/page";
import { Navbar } from "./components/Navbar"
import Card from "./pages/card/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "1AfricaradioTv",
  description: "1AfricaRadioTV is a Pan African radio station and multilingual platform that brings people together through music. Listen now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />        
        {children}
        <Card />
        <Footer />
        <Chat />
        <Radio />
       
      </body>
    </html>
  );
}
