export class SingletonEventListener {
  constructor(public eventName: string, public eventCallback: () => void) {}
}
