class RequestBuilder {
  constructor(url, headers) {
    this.credentials = 'omit';
    this.url = url;
    this.headers = headers;
    this.credentials = 'omit';
    this.mode = 'cors';
    this.referrerPolicy = 'no-referrer';
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
                referrerPolicy: this.referrerPolicy
             });
  }
}

export { RequestBuilder }
