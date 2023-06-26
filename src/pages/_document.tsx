/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class myDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Catálogo de decorações - Marcela Santos</title>
          <link rel="shortcut icon" href="/icons/MarcelaDec512.png" />
          <link rel="apple-touch-icon" href="/icons/MarcelaDec512.png" />
          <meta name="theme-color" content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myDocument;
