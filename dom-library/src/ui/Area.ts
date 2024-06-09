import { Component } from "src/types";

export const Area: Component = () => {
  return {
    mount: () => {
      console.log("without mount");
    },
    getRawTemplate: () => {
      return `<div class="area">
      <hr/>
      <h2>Area component</h2>
      <hr/>
      </div>`;
    },
  };
};
