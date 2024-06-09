import { Component, Listener } from "./types";
import { Area } from "./ui/Area.js";

export const App: Component = ({ renderFrame }) => {
  const AreaComponent = Area({});

  let listeners: Listener[] = [];
  const RENDER_ID = "App";
  let state = {
    count: 0,
  };

  const observe = () => {
    listeners?.forEach((listener) => listener && listener());
  };

  const subscribe = (listener: Listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const getTemplate = () => {
    return `
	  <div id="${RENDER_ID}">
		  <h1>Some text</h1>
		  <button id="increment">increment</button>
		  <button id="decrement">decrement</button>
		  <h2>Count: ${state.count}</h2>
      ${AreaComponent.getRawTemplate?.()} 
	  </div>
	  `;
  };

  const injectListeners = () => {
    const increment = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    increment?.addEventListener("click", () => {
      state.count = state.count + 1;
      render();
    });
    decrementBtn?.addEventListener("click", () => {
      state.count = state.count - 1;
      render();
    });
  };

  const render = () => {
    if (!!renderFrame) {
      renderFrame.innerHTML = getTemplate();
      injectListeners();
      observe();
    }
  };

  const getNode = () => {
    return document.getElementById(RENDER_ID);
  };

  return {
    mount: () => {
      render();
    },
    node: getNode,
    subscribe,
  };
};
