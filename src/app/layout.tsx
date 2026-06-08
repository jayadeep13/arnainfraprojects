import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import PageTransition from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  metadataBase: new URL('https://arnainfraprojects.com'),
  title: {
    default: 'ARNA INFRA PROJECTS | Best Construction Company in Hanuman Junction & Vijayawada',
    template: '%s | ARNA INFRA PROJECTS',
  },
  description:
    'ARNA INFRA PROJECTS – #1 Premium construction company in Hanuman Junction & Vijayawada. Villa construction, hospital design, building approvals, interior design, turnkey projects across Krishna District & Andhra Pradesh. Trusted by 500+ families since 2014.',
  keywords: [
    'Construction Company in Hanuman Junction',
    'Construction Company in Vijayawada',
    'Best Construction Company Andhra Pradesh',
    'Architect in Hanuman Junction',
    'Best Architect Vijayawada',
    'Villa Construction Andhra Pradesh',
    'Villa Construction Hanuman Junction',
    'DTCP Approval Consultant AP',
    'Building Permission Andhra Pradesh',
    'Turnkey Construction Services',
    'Hospital Construction Vijayawada',
    'Hospital Construction AP',
    'Interior Design Hanuman Junction',
    'Interior Design Vijayawada',
    'Apartment Construction Krishna District',
    'RCC Construction Vijayawada',
    'Commercial Building Construction AP',
    'Building Plan Approval AP',
    'Panchayat NOC Andhra Pradesh',
    'ARNA INFRA PROJECTS',
    'K Vidya Sagar Architect',
  ],
  authors: [{ name: 'K. Vidya Sagar – ARNA INFRA PROJECTS' }],
  creator: 'ARNA INFRA PROJECTS',
  publisher: 'ARNA INFRA PROJECTS',
  category: 'Construction & Architecture',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arnainfraprojects.com',
    siteName: 'ARNA INFRA PROJECTS',
    title: 'ARNA INFRA PROJECTS | Premium Construction Company in AP',
    description:
      'Premium construction & architectural services in Hanuman Junction and Vijayawada, Andhra Pradesh. 500+ projects delivered. 10+ years experience.',
    images: [{ url: '/villa1.png', width: 1200, height: 630, alt: 'ARNA INFRA PROJECTS – Premium Construction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARNA INFRA PROJECTS | Best Construction Company in Andhra Pradesh',
    description: 'Premium construction & architectural services in Hanuman Junction, Vijayawada & AP.',
    images: ['/villa1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0d1b4a" />
        <meta name="msapplication-TileColor" content="#0d1b4a" />
        <link rel="canonical" href="https://arnainfraprojects.com" />
      </head>
      <body style={{ overflowX: 'hidden' }}>
        <Navbar />
        <PageTransition>
          <main style={{ overflowX: 'clip' }}>{children}</main>
        </PageTransition>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
