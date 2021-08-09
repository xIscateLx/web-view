type Environment = {
  WEBVIEW_URL: string;
};

declare module '@env' {
  const env: Environment;
  export = env;
}
