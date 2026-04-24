'use client'
import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthRouteGuard from '@/components/AuthRouteGuard'
import EmployerSectionSidebar from '@/components/EmployerSectionSidebar'
import CandidateSettingsSidebar from '@/components/CandidateSettingsSidebar'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={inter.className}>
      <head>
<link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/font-utils.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/imgs/template/favicon.svg" />
      </head>

      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <AuthRouteGuard />
          <Header />
          {children}
          <EmployerSectionSidebar />
          <CandidateSettingsSidebar />
          <Footer />
        </Provider>

        {/* jQuery MUST be beforeInteractive and loaded before all other scripts */}
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/jquery-migrate-3.3.0.min.js" strategy="beforeInteractive" />

        {/* All other plugins load after page is interactive */}
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/magnific-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/select2.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/scrollup.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/counterup.js" strategy="afterInteractive" />

        {/* perfect-scrollbar initialised ONLY on elements that exist — main.js handles it */}
        <Script src="/assets/js/plugins/perfect-scrollbar.min.js" strategy="afterInteractive" />

        {/* main.js last, after all plugins are ready */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />

      </body>
    </html>
  )
}
