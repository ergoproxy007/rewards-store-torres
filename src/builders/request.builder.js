class RequestBuilder {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
    this.credentials = 'omit';
    this.referrerPolicy = 'no-referrer';
    this.mode = 'cors';
  }
  setMethod(method) {
      this.method = method;
      return this;
  }
  build() {
      return new Request(this.url, {
                headers: this.headers,
                method: this.method,
                credentials: this.credentials,
                mode: this.mode,
                referrerPolicy: this.referrerPolicy,
             });
  }
}

export { RequestBuilder }
