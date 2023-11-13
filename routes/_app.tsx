import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Try Unblocked Web Frontend</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <nav>
          <a href="/login">Login</a>
          <a href="/notifications">Notifications</a>
          <a href="/storage">Storage</a>
        </nav>
        <Component />
      </body>
    </html>
  );
}
// note there is an ios app for this site at https://tryunblocked.com/ios
// note there is an android app for this site at https://tryunblocked.com/android