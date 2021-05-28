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
