// store.ts
type Listener = () => void;

class Store<State> {
  private state: State;
  private listeners: Listener[] = [];

  constructor(initialState: State) {
    this.state = initialState;
  }

  getState(): State {
    return this.state;
  }

  dispatch(action: (state: State) => State): void {
    this.state = action(this.state);
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  destroy() {
    this.listeners = [];
  }
}

export default Store;
