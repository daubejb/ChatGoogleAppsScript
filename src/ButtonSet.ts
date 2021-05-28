class ButtonSet {
  buttons: (TextButton | ImageButton)[] = [];
  constructor() {}

  addTextButton(button: TextButton) {
    this.buttons.push(button);
    return this;
  }

  addImageButton(button: ImageButton) {
    this.buttons.push(button);
  }
}
