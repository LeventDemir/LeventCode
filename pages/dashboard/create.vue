<template>
  <div class="columns">
    <div class="column is-full">
      <WorkForm operation="create" />
    </div>
  </div>
</template>


<script>
import WorkForm from "@/components/work-form";

export default {
  middleware: 'auth',
  components: { WorkForm }
};
</script>