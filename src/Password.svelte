<script>
  // Props
  export let id = "password";
  export let label = "Password";
</script>

<div class="mt3">
  <label class="db fw4 lh-copy f6" for={id}>{label}</label>
  <input
    class="b pa2 input-reset ba bg-transparent"
    type="password"
    name={id}
    {id} />
</div>
