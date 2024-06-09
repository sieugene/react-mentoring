export type Listener = () => void;

export type Component<P extends {} = {}> = (args: {
  renderFrame?: HTMLElement;
  parentComponent?: ReturnType<Component>;
  props?: P;
}) => {
  mount: () => void;
  node?: () => HTMLElement | null;
  subscribe?: (listener: Listener) => () => void;
  getRawTemplate?: () => string
};
