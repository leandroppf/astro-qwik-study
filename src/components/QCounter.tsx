import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { $count, decrement, increment } from "@/store/counter";

const QCounter = component$(() => {
  const counterValue = useSignal($count.get());

  useVisibleTask$(() => {
    $count.subscribe((value) => {
      counterValue.value = value;
    });
  });

  const incrementValue = $(() => increment());
  const decrementValue = $(() => decrement());

  return (
    <div class="card bg-base-content hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-400 transition-all duration-500">
      <div class="card-body">
        <h2 class="card-title text-info">{counterValue}</h2>

        <p class="mb-4 text-info">
          This is a qwik client component using nanoStore to set the value
        </p>

        <div class="card-actions">
          <button class="btn btn-primary" onClick$={incrementValue}>
            Increment
          </button>
          <button class="btn btn-primary" onClick$={decrementValue}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
});

export default QCounter;
