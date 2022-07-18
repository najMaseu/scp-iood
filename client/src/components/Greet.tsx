import { greet } from "@application/greet";
import { Component, createEffect } from "solid-js";

export const Greet: Component = () => {
  createEffect(() => {
    greet();
  });

  return <p>I greet people!</p>;
};
