/**
 * A builder for Google Chat {@link https://developers.google.com/chat/reference/message-formats/cards | card} objects
 */
class CardBuilder {
  card: Card;
  constructor() {
    this.card = new Card();
  }

  setHeader(header: Header) {
    this.card.header = header;
    return this;
  }

  /** 
   * Adds a section to this card
   * @param section - The Section to use.
   * @returns CardBuilder - This object, for chaining 
  */
  addSection(section: Section) {
    this.card.sections.push(section);
    return this;
  }

  build() {
    return this.card;
  }
}
