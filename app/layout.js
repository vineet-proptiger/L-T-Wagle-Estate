import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'L&T Wagle Estate Thane | Premium 2 & 3 BHK Apartments — Mulund Extension',
  description: 'L&T Wagle Estate — Premium 2 & 3 BHK Residences at Wagle Estate, Thane (Mulund Extension). By L&T Realty. 2 BHK from 690 Sq. Ft., 3 BHK from 1100 Sq. Ft. EOI ₹2 Lakhs. Enquire Now.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://ltwagkeestate.in/"
              },
              "headline": "L&T Wagle Estate | Premium 2 & 3 BHK Apartments — Wagle Estate, Thane",
              "description": "L&T Wagle Estate — Premium 2 & 3 BHK Residences at Wagle Estate, Thane (Mulund Extension). By L&T Realty. 2 BHK from 690 Sq. Ft., 3 BHK from 1100 Sq. Ft. EOI ₹2 Lakhs.",
              "image": "https://ltwagkeestate.in/_next/image?url=%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
              "author": {
                "@type": "Organization",
                "name": "Proptiger Marketing Services Pvt Ltd",
                "url": "https://www.proptiger.com/thane/wagle-estate/lt-wagle-estate"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.proptiger.com/"
                }
              },
              "datePublished": "2026-04-22"
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
