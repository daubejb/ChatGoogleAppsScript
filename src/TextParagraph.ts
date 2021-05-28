class TextParagraph {
  textParagraph?: Record<string, unknown>;
  constructor() {}

  setText(text: string) {
    this.textParagraph = { text: text };
    return this;
  }
}
