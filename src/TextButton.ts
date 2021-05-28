class TextButton {
  textButton?: { text: string; onClick?: OpenLink | Action };

  constructor() {}

  setText(text: string) {
    if (this.textButton === undefined) this.textButton = { text: "" };
    this.textButton.text = text;
    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (this.textButton === undefined) this.textButton = { text: "" };
    this.textButton.onClick = openLink;
    return this;
  }

  setAction(action: Action) {
    if (this.textButton === undefined) this.textButton = { text: "" };
    this.textButton.onClick = action;
  }
}
