class Section {
  header = "";
  widgets: Widget[] = [];

  constructor() {}

  setHeader(header: string) {
    this.header = header;
    return this;
  }

  addWidget(widget: Widget) {
    this.widgets.push(widget);
    return this;
  }
}
