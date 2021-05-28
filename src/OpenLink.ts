class OpenLink {
  openLink: { url: string } = { url: "" };

  constructor() {}

  setUrl(url: string) {
    this.openLink.url = url;
    return this;
  }
}
