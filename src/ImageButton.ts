class ImageButton {
  imageButton?: { iconUrl?: string; icon?: Icon; onClick?: Action | OpenLink };
  constructor() {}

  setIconUrl(iconUrl: string) {
    if (this.imageButton === undefined) this.imageButton = {};
    this.imageButton.iconUrl = iconUrl;
  }

  setIcon(icon: Icon) {
    if (this.imageButton === undefined) this.imageButton = {};
    this.imageButton.icon = icon;
  }

  setOnClick(onClick: Action | OpenLink) {
    if (this.imageButton === undefined) this.imageButton = {};
    this.imageButton.onClick = onClick;
  }
}
