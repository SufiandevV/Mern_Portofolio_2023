import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" ></link>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

      </Head>
      <body className='font-Poppins text-normal-font-size bg-body-color text-text-color'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}