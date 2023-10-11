import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ __NEXT_DATA__ }) {
  const getStyles = () => {
    const {page} = __NEXT_DATA__
    if (page.split("/")[1] === "chat") {
      return (
        <style jsx global>{`
          html, body {
            height: 100dvh;
          }

          #__next {
            display: flex;
            flex-direction: column;
            background-color: red;
          }
        `}</style>
        )
    } else {
      return ''
    }
  }

  return (
    <Html lang="en">
      {/* {getStyles()} */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
