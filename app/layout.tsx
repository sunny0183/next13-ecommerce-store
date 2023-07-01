import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Shop Islamic Wear for Men, Women, and Children | IslamicFashion.us',
  description: 'Discover a wide range of Islamic wear for men, women, and children at IslamicFashion.us Find modest and stylish clothing, hijabs, abayas, thobes, and accessories. Shop now for high-quality Islamic fashion.',
  keywords: 'Islamic wear, Islamic clothing, modest clothing, hijabs, abayas, thobes, Islamic fashion, men`s Islamic wear, women`s Islamic wear, children`s Islamic wear'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID="G-65NCBW6W8F" />
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
