<template>
  <div class="column">
    <WorkForm operation="update" />
  </div>
</template>


<script>
import WorkForm from "@/components/work-form";

export default {
  middleware: "auth",
  components: { WorkForm }
};
</script>