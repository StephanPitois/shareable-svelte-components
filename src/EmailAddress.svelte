<script>
  // Props
  export let id = "email-address";
  export let label = "Email address";
</script>

<div class="mt3">
  <label class="db fw4 lh-copy f6" for={id}>{label}</label>
  <input
    class="pa2 input-reset ba bg-transparent w-100 measure"
    type="email"
    name={id}
    {id} />
</div>
