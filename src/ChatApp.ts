function newCardBuilder() {
  return new CardBuilder();
}
function newHeader() {
  return new Header();
}
function newSection() {
  return new Section();
}
function newTextParagraph() {
  return new TextParagraph();
}
function newTextButton() {
  return new TextButton();
}
function newOpenLink() {
  return new OpenLink();
}
function newAction() {
  return new Action();
}
function newButtonSet() {
  return new ButtonSet();
}

/**
 * An action that enables interactivity with the Chat card.  The Action does not happen directly on the client but rather invokes an Apps Script callback function with optional parameters.
 */
class Action {
  action: { actionMethodName: string; parameters: Parameter[] } = {
    actionMethodName: "",
    parameters: [],
  };
  

  /**
   * 
   * @param actionMethodName - Apps Scripts bots must specify action.actionMethodName. To support interactive cards, bots must also define an onClickCard(event) method on the server to handle user clicks.  This method will receive a callback when the user clicks the card.
   * @returns this object, for chaining
   */
  setActionMethodName(actionMethodName: string) {
    this.action.actionMethodName = actionMethodName;
    return this;
  }

  /**
   * Add a key value parameter to add special-case clicks to different buttons for your bot.
   * @param parameter key/value { "key": "cardId", "value": "123abc" }
   * @returns this object, for chaining
   */
  addParameter(parameter: Parameter) {
    this.action.parameters.push(parameter);
    return this;
  }
}

/**
 * Holds a set of {@link TextButtons | text buttons} and/or {@link ImageButtons | image buttons} objects that are displayed in a row.
 */
class ButtonSet {
  buttons: (TextButton | ImageButton)[] = [];
  constructor() {}

  /**
   * Adds a text button
   * @param button - The text button to add.
   * @returns This object, for chaining.
   */
  addTextButton(button: TextButton) {
    this.buttons.push(button);
    return this;
  }

  /**
   * Adds an image button
   * @param button - The image button to add. 
   */
  addImageButton(button: ImageButton) {
    this.buttons.push(button);
  }
}

/**
 * A Google Chat {@link https://developers.google.com/chat/reference/message-formats/cards | card}
 */
class Card {

  header?: Header;
  sections: Section[] = [];

  /**
   * Prints the JSON representation of this object
   * @return {string} Prints the JSON representation of this object. This is for debugging only.
   */
  printJson() {
    return JSON.stringify(this, undefined, 2);
  }
}

/**
 * A builder for Google Chat {@link https://developers.google.com/chat/reference/message-formats/cards | card} objects
 */
class CardBuilder {
  card: Card;
  constructor() {
    this.card = new Card();
  }

  /**
   * Sets the header for this card.
   * @param header - the {@link Header | Header} to use
   * @returns - This object, for chaining.
   */
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

  /**
   * Builds the current card 
   * @returns - A card.
   */ 
  build() {
    return this.card;
  }
}

/**
 * The header of a Google Chat {@link https://developers.google.com/chat/reference/message-formats/cards | card}
 */
class Header {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageStyle?: ImageStyle;

  /**
   * Sets the {@link IMAGE_STYLE | image style} for the header image
   * @param imageStyle - The image style
   * @returns - this object, for chaining
   */
  setImageStyle(imageStyle: ImageStyle) {
    this.imageStyle = imageStyle;
    return this;
  }

  /**
   * Sets the image url for the header image
   * @param imageUrl  - The image url
   * @returns this object, for chaining
   */
  setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
    return this;
  }

  /**
   * Sets the subtitle for the card header
   * @param subtitle - The subtitle text
   * @returns - this object, for chaining
   */
  setSubtitle(subtitle: string) {
    this.subtitle = subtitle;
    return this;
  }

  /**
   * Sets the title for the card header
   * @param title - The title text
   * @returns - this object, for chaining
   */
  setTitle(title: string) {
    this.title = title;
    return this;
  }
}

/**
 * A image button with an image displayed on it.
 */
class ImageButton {
  imageButton?: { iconUrl?: string; icon?: Icon; onClick?: Action | OpenLink };

  /**
   * Sets the URL of an image to use as this button's icon.
   * @param iconUrl - The URL address of a hosted image to use as this button's icon.
   * @return - this object for chaining 
   */
  setIconUrl(iconUrl: string) {
    if (this.imageButton === undefined) this.imageButton = {};
    this.imageButton.iconUrl = iconUrl;
    return this;
  }

  /**
   * Sets a predefined {@link @ICON | Icon}} to display on the button.
   * @param icon - One of the predefined {@link @ICON | Icon} values.
   * @return - this object, for chaining.
   */
  setIcon(icon: Icon) {
    if (this.imageButton === undefined) this.imageButton = {};
    this.imageButton.icon = icon;
    return this;
  }

  /**
   * Sets an action that executes when the object is clicked.
   * @param onClick - The action to take when this element is clicked.
   * @return - this object, for chaining.
   */
  setOnClick(onClick: Action | OpenLink) {
    if (this.imageButton === undefined) this.imageButton = {};
    this.imageButton.onClick = onClick;
    return this;
  }
}

/**
 * Represents an action to open a link.
 */
class OpenLink {
  openLink: { url: string } = { url: "" };

  /**
   * Sets the URL to be opened.
   * @param url - The URL to open.
   * @returns - This object, for chaining.
   */
  setUrl(url: string) {
    this.openLink.url = url;
    return this;
  }
}

/**
 * A Section holds a group of {@link @Widget | Widgets } and provides visual separation between them.
 */
class Section {
  header = "";
  widgets: Widget[] = [];

  /**
   * Sets the header of the section.  Optional.
   * @param header - The header text.
   * @returns This object, for chaining.
   */
  setHeader(header: string) {
    this.header = header;
    return this;
  }

  /**
   * Adds the given widget to this section. Widgets are shown in the order they were added.
   * @param widget - A widget to add to the section
   * @returns - This object, for chaining.
   */
  addWidget(widget: Widget) {
    this.widgets.push(widget);
    return this;
  }
}

/**
 * A text button with a text Label.
 */
class TextButton {
  textButton?: { text: string; onClick?: OpenLink | Action };

  /**
   * Sets the text that displays on the button.
   * @param text - The text that appears on the button.
   * @returns - This object, for chaining.
   */
  setText(text: string) {
    if (this.textButton === undefined) this.textButton = { text: "" };
    this.textButton.text = text;
    return this;
  }

  /**
   * Sets a URL to be opened when the object is clicked. Use this method when the URL is already known and only needs to be opened.
   * @param openLink - An {@link @OpenLink | OpenLink} object for describing the URL to open.
   * @returns - This object, for chaining.
   */
  setOpenLink(openLink: OpenLink) {
    if (this.textButton === undefined) this.textButton = { text: "" };
    this.textButton.onClick = openLink;
    return this;
  }

  /**
   * Sets an action that executes on the server when the object is clicked.
   * @param action - The action to take when this element is clicked.
   * @returns - This object, for chaining.
   */
  setAction(action: Action) {
    if (this.textButton === undefined) this.textButton = { text: "" };
    this.textButton.onClick = action;
    return this;
  }
}

/**
 * A widget that displays text and supports {@link | Basic HTML Card Text Formatting}
 */
class TextParagraph {
  textParagraph?: Record<string, unknown>;

  /**
   * Sets the text of the paragraph.
   * @param text - The text of the paragraph.
   * @returns - This object, for chaining.
   */
  setText(text: string) {
    this.textParagraph = { text: text };
    return this;
  }
}

class Widget {
  this = {};
}

enum ICON  {
  AIRPLANE = 'AIRPLANE',
  BED = 'HOTEL_ROOM_TYPE',
  BOOKMARK = 'BOOKMARK',
  BUS = 'BUS',
  CAR = 'CAR',
  CALENDAR = 'INVITE',
  CHAIR = 'EVENT_SEAT',
  CLOCK = 'CLOCK',
  CONF_NUM_ICON = 'CONFIRMATION_NUMBER_ICON',
  DESCRIPTION = 'DESCRIPTION',
  DOLLAR = 'DOLLAR',
  EMAIL = 'EMAIL',
  FLIGHT_ARRIVAL = 'FLIGHT_ARRIVAL',
  FLIGHT_DEPARTURE = 'FLIGHT_DEPARTURE',
  FORK_AND_KNIFE = 'RESTAURANT_ICON',
  MAP_PIN = 'MAP_PIN',
  MEMBERSHIP = 'MEMBERSHIP',
  PEOPLE = 'MULTIPLE_PEOPLE',
  PERSON = 'PERSON',
  PHONE = 'PHONE',
  PLAY_BUTTON = 'VIDEO_PLAY',
  SHOPPING_CART = 'SHOPPING_CART',
  STAR = 'STAR',
  STORE = 'STORE',
  TICKET = 'TICKET',
  TRAIN = 'TRAIN',
  VIDEO_CAMERA = 'VIDEO_CAMERA'
};

enum IMAGE_STYLE {
  IMAGE = 'IMAGE',
  AVATAR = 'AVATAR',
};
