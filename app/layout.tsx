import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Cabin } from 'next/font/google';
import "./globals.css";

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Pham Xuan Khoai",
  description: "Pham Xuan Khoai is a data scientist with over 8 years of experience, including more than 3 years of managing a high-performing team. I have leveraged AI and data analysis to enhance production and streamline workflows, driving the company towards data-driven decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cabin.className} h-full scroll-smooth`}>
        <body className="antialiased">
          <Header />
          <main className="min-h-screen relative isolate overflow-hidden">
            <div className="mx-auto w-full max-w-[50rem] px-5 py-3 pt-16 md:px-10 lg:px-0">
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </html>
  );
}
