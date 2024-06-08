import { Component } from "../types";

export const Dummy: Component = ({ renderFrame, parentComponent }) => {
  return {
    mount: () => {
      const fragment = document.createDocumentFragment();
      const component = fragment.appendChild(document.createElement("div"));
      component.innerHTML = `<div>
      Dummy Component Inside App Component
      </div>`;

      if (!!parentComponent?.subscribe) {
        parentComponent.subscribe(() => {
          const parentNode = parentComponent?.node?.();
          if (parentNode) {
            parentNode.appendChild(component);
          }
        });
      }
    },
  };
};
