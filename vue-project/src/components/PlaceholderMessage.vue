<script setup lang="ts">


defineProps<{
  msg: string,
  type: "" | "success" | "error",
}>()
</script>

<template>
 <p :class=type>{{ msg }}</p>

</template>

<style scoped>
    p {
        color: var(--color-text);
        font-size: 1.5rem;
        text-align: center;
    }
    p.error {
        color: var(--color-error);
    }
    p.success {
        color: var(--color-success);
    }
</style>
