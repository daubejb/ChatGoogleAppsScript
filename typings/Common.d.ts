type Icon =
  | "AIRPLANE"
  | "HOTEL"
  | "BOOKMARK"
  | "BUS"
  | "CAR"
  | "INVITE"
  | "EVENT_SEAT"
  | "CLOCK"
  | "CONFIRMATION_NUMBER_ICON"
  | "DESCRIPTION"
  | "DOLLAR"
  | "EMAIL"
  | "FLIGHT_ARRIVAL"
  | "FLIGHT_DEPARTURE"
  | "RESTAURANT_ICON"
  | "MAP_PIN"
  | "MEMBERSHIP"
  | "PEOPLE"
  | "PERSON"
  | "PHONE"
  | "VIDEO_PLAY"
  | "SHOPPING_CART"
  | "STAR"
  | "STORE"
  | "TICKET"
  | "TRAIN"
  | "VIDEO_CAMERA";

type ImageStyle =
  | "AVATAR"
  | "IMAGE";

type Parameter = {
  key: string;
  value: string;
};

type ButtonType = "textButton" | "imageButton";
