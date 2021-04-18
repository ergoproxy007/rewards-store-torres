/**
 * Determine http headers info for consume API application
 */
class HeaderBuilder {
  constructor(contentType, accept, token) {
      this.contentType = contentType;
      this.accept = accept;
      this.token = token;
  }
  build() {
    const headers = new Headers();
    headers.append('Content-Type', this.contentType);
    headers.append('Accept', this.accept);
    headers.append('Authorization', this.token);
    return headers;
  }
}

export { HeaderBuilder }
