import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from "@/providers/modal-providers";
import { Toaster } from "@/components/ui/sonner"
import { BillingProvider } from "../providers/billing-providers";



const font = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ZENCY",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          card:"bg-neutral-200",
          formButtonPrimary:"bg-[#e2f24b] hover:bg-neutral-900 hover:text-neutral-50 text-sm text-neutral-900 normal-case rounded-3xl",
          footerAction: 'flex items-center justify-center',
          footerActionLink: 'text-neutral-900 font-bold text-[1rem]',
          footerActionText: 'text-[1rem]',
          socialButtons: 'shadow-sm border rounded-3xl',
          formFieldLabel: 'pl-2',
          formFieldInput: 'rounded-3xl text-neutral-900',
          socialButtonsProviderIcon:'mix-blend-multiply'
        },
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={font.className} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BillingProvider>
            <ModalProvider>
              {children}
              <Toaster />
            </ModalProvider>
            </BillingProvider>
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
