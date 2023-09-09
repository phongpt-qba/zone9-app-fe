import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />,
        });

      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } catch (error) {
      return initialProps;
    }
  }

  render() {
    return (
      <Html
        data-theme="dark"
        style={{
          colorScheme: 'dark',
        }}
      >
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="copyright" content="Zone9 Survival" />
          <meta name="author" content="Zone9 Survival" />
          <meta name="robots" content="INDEX,FOLLOW" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Zone9 Survival" />
          <meta property="og:image" content={'/favicon.ico'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
