type Icon =
  | "AIRPLANE"
  | "BED"
  | "BOOKMARK"
  | "BUS"
  | "CAR"
  | "CALENDAR"
  | "CHAIR"
  | "CLOCK"
  | "CONF_NUM_ICON"
  | "DESCRIPTION"
  | "DOLLAR"
  | "EMAIL"
  | "FLIGHT_ARRIVAL"
  | "FLIGHT_DEPARTURE"
  | "FORK_AND_KNIFE"
  | "MAP_PIN"
  | "MEMBERSHIP"
  | "PEOPLE"
  | "PERSON"
  | "PHONE"
  | "PLAY_BUTTON"
  | "SHOPPING_CART"
  | "STAR"
  | "STORE"
  | "TICKET"
  | "TRAIN"
  | "VIDEO_CAMERA";

type ImageStyle = "AVATAR" | "IMAGE";

type Parameter = {
  key: string;
  value: string;
};

type ButtonType = "textButton" | "imageButton";

type KeyValueType = {
  topLabel: string;
  content: string;
  bottomLabel?: string;
  onClick?: Action | OpenLink;
  icon?: Icon;
  button?: ImageButton | TextButton;
};
