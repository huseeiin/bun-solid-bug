import { createAsync, revalidate } from "@solidjs/router";
import { For } from "solid-js";
import { add, del } from "~/lib/api";
import { get } from "~/lib/server";

export default function Home() {
  const ids = createAsync(() => get());
  return (
    <>
      <h1
        onClick={() => {
          console.log("hi");
        }}
      >
        Hello
      </h1>
      <For each={ids()}>
        {({ id }) => (
          <>
            <p>{id}</p>
            <button
              onClick={async () => {
                await del(id);
                revalidate("ids");
              }}
            >
              Delete
            </button>
          </>
        )}
      </For>
      <button
        onClick={async () => {
          add();
          revalidate("ids");
        }}
      >
        Add
      </button>
    </>
  );
}
