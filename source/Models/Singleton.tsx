import * as React from "react";
import * as ReactDom from "react-dom";
import { ComponentType } from "react";
import { SingletonComponentWrapper } from "../Components/SingletonComponentWrapper";

export class Singleton<IProps> {
  private scwInstance?: SingletonComponentWrapper;

  constructor(protected component: ComponentType<any>) {
    ReactDom.render(
      <SingletonComponentWrapper
        referenceCallback={(_instance: any) => (this.scwInstance = _instance)}
        wrappedComponent={this.component}
      />,
      document.body.appendChild(document.createElement("div"))
    );
  }

  public mount(props: IProps): void {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        wrappedProps: props,
        shouldBeMounted: true
      });
  }

  public updateProps(props: IProps): void {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        wrappedProps: props
      });
  }

  public unmount(): void {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        shouldBeMounted: false
      });
  }
}
