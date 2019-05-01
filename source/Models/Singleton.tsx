import * as React from "react";
import * as ReactDom from "react-dom";
import { ComponentType } from "react";
import { SingletonComponentWrapper } from "../Components/SingletonComponentWrapper";

export class Singleton<IProps> {
  private scwInstance?: SingletonComponentWrapper;
  private unmountDelayHandle: number = -1;
  private updateDelayHandle: number = -1;

  constructor(protected component: ComponentType<any>) {
    ReactDom.render(
      <SingletonComponentWrapper
        referenceCallback={(_instance: any) => (this.scwInstance = _instance)}
        wrappedComponent={this.component}
      />,
      document.body.appendChild(document.createElement("div"))
    );
  }

  public mount(props: IProps): Singleton<IProps> {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        wrappedProps: props,
        shouldBeMounted: true
      });
    return this;
  }

  public update(props: IProps, delayMs?: number): Singleton<IProps> {
    window.clearTimeout(this.updateDelayHandle);
    if (typeof delayMs !== "undefined")
      this.updateDelayHandle = window.setTimeout(
        () => this.update(props),
        delayMs
      );
    else if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        wrappedProps: props
      });
    return this;
  }

  public unmount(delayMs?: number): Singleton<IProps> {
    window.clearTimeout(this.unmountDelayHandle);
    if (typeof delayMs !== "undefined")
      this.unmountDelayHandle = window.setTimeout(
        () => this.unmount(),
        delayMs
      );
    else if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        shouldBeMounted: false
      });
    return this;
  }
}
