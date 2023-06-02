import Head from 'next/head';
import { Inter } from 'next/font/google';
import NProgress from "nprogress"
import './globals.css';
import Nav from 'src/components/Navigation/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const head = () => (
    <>
     {/* //  <!-- Latest compiled and minified CSS --> */}
    <link
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css'
      integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u'
      crossOrigin='anonymous'
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      </>
  );

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>
          {head()}
          {Nav()}
          <div className='container pt-5 pb-5'>{children}</div>
        </div>
      </body>
    </html>
  );
}
