import * as React from "react";
import { ComponentType } from "react";
import * as ReactDom from "react-dom";

export class Singleton<IProps> {
  private targetElement: HTMLElement = this.createTargetElement();
  private isActive: boolean = false;
  private jsxInstance: JSX.Element | undefined = undefined;

  constructor(protected component: ComponentType<any>) {}

  public mount(props?: IProps): void {
    if (this.isActive === true) {
      this.unmount();
    }
    this.isActive = true;
    this.jsxInstance = <this.component {...props} />;
    ReactDom.render(this.jsxInstance, this.targetElement);
  }

  public unmount(): void {
    ReactDom.unmountComponentAtNode(this.targetElement);
  }

  public getInstance(): ComponentType<any> {
    return this.component;
  }

  public addEventListener(eventName: string, callback: () => void): void {
    //
  }

  private createTargetElement(): HTMLElement {
    const _element = window.document.createElement("div");
    _element.setAttribute("singleton", "");
    window.document.body.appendChild(_element);
    return _element;
  }
}
