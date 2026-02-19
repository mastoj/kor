import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { Providers } from "@/components/providers";
import { TopBar } from "@/components/top-bar";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <TopBar />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
