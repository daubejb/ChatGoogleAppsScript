  /**
 * A Google Chat {@link https://developers.google.com/chat/reference/message-formats/cards | card}
 */
class Card {

  header?: Header;
  sections: Section[] = [];
  constructor() {}

  /**
   * Prints the JSON representation of this object
   * @return {string} Prints the JSON representation of this object. This is for debugging only.
   */
  printJson() {
    return JSON.stringify(this, undefined, 2);
  }
}
