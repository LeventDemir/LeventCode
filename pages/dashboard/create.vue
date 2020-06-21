<template>
  <div class="column">
    <WorkForm operation="create" />
  </div>
</template>


<script>
import WorkForm from "@/components/work-form";

export default {
  middleware: "auth",
  components: { WorkForm }
};
</script>