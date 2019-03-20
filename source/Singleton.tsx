import * as React from "react";
import { ComponentType } from "react";
import * as ReactDom from "react-dom";

export class Singleton<IProps> {
  private targetElement: HTMLElement = this.createTargetElement();
  private isInitialized: boolean = false;
  private isActive: boolean = false;
  private componentInstance: JSX.Element | undefined = undefined;

  constructor(protected component: ComponentType<any>) {}

  public show(props?: IProps): void {
    if (this.isActive === true) {
      this.hide();
    }
    if (this.isInitialized === false) {
      this.isActive = true;
      this.componentInstance = <this.component {...props} />;
      ReactDom.render(this.componentInstance, this.targetElement);
    }
  }

  public hide(): void {
    ReactDom.unmountComponentAtNode(this.targetElement);
  }

  public getInstance(): ComponentType<any> {
    return this.component;
  }

  private createTargetElement(): HTMLElement {
    const _element = window.document.createElement("div");
    _element.setAttribute("singleton", "");
    window.document.body.appendChild(_element);
    return _element;
  }
}
