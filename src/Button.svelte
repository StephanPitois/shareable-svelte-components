<script>
  import { createEventDispatcher } from "svelte";

  // Props
  export let text = "Click me!";

  // Events
  const dispatch = createEventDispatcher();
</script>

<button
  class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
  on:click|preventDefault={e => {
    dispatch('click', e);
  }}>
  {text}
</button>
