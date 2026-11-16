import Script from 'next/script';
import Head from '../components/Head';
import Foot from '../components/Foot';
import './globals.css';

const nav = [
  {path: '/', label: 'Portfolio'},
  {path: '/Bio', label: 'Bio'},
  {path: '/Credentials', label: 'Credentials'},
];

const social = [
  {url: 'https://www.linkedin.com/in/aronroberts'},
  {url: 'https://github.com/robotros'},
];

export const metadata = {
  title: 'Aron Roberts',
  description: 'Aron Roberts is a innovator in the technology space with over 10 years of experience in corperate Information Technology.',
  keywords: ['wmpq', 'gaming', 'clan', 'esports', 'charity', 'twitch', 'IT', 'portfolio', 'Aron Roberts', 'information technology', 'office365', 'microsoft', 'developer'],
  authors: [{name: 'Aron Roberts'}],
  icons: {icon: '/favicon.ico'},
};

/**
 * Site shell shared by Portfolio, Bio, and Credentials.
 * @param {{children: import('react').ReactNode}} props
 * @return {import('react').ReactElement}
 */
export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Expletus+Sans' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Overlock+SC' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
          integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <main className='app'>
          <Head Nav={nav} />
          <div className='center'>
            {children}
          </div>
          <Foot social={social} />
        </main>
        <Script
          src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
          integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
          crossOrigin='anonymous'
          strategy='beforeInteractive'
        />
        <Script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'
          integrity='sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut'
          crossOrigin='anonymous'
          strategy='beforeInteractive'
        />
        <Script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'
          integrity='sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k'
          crossOrigin='anonymous'
          strategy='beforeInteractive'
        />
      </body>
    </html>
  );
}
