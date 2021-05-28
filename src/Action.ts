class Action {
  action: { actionMethodName: string; parameters: Parameter[] } = {
    actionMethodName: "",
    parameters: [],
  };
  constructor() {}

  setActionMethodName(actionMethodName: string) {
    this.action.actionMethodName = actionMethodName;
    return this;
  }

  addParameter(parameter: Parameter) {
    this.action.parameters.push(parameter);
    return this;
  }
}
