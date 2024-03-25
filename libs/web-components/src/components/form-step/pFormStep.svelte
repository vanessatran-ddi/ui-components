<svelte:options customElement="pgoa-form-step" />

<script lang="ts">
  import { onMount } from "svelte";
  import { typeValidator } from "../../common/utils";

  // Validator
  const [StatusTypes, validateStatus] = typeValidator(
    "Form Step status",
    ["incomplete", "complete"],
    false,
  );
  type FormStepStatus = (typeof StatusTypes)[number];
  
  export let text: string;
  export let status: FormStepStatus = "";

  onMount(() => {
    validateStatus(status);
  })
</script>
