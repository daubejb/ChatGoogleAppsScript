class Header {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageStyle?: ImageStyle;
  constructor() {}

  setImageStyle(imageStyle: ImageStyle) {
    this.imageStyle = imageStyle;
    return this;
  }

  setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
    return this;
  }

  setSubtitle(subtitle: string) {
    this.subtitle = subtitle;
    return this;
  }

  setTitle(title: string) {
    this.title = title;
    return this;
  }
}
