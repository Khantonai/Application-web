<script setup lang="ts">
defineProps<{
  data: Object,
  displayColumns: Object,
}>()

function getNestedProperty(obj: any, path: string | Array<string>): any {
  if (typeof path === 'string') {
    path = path.split('.');
  }
  return path.reduce((acc, part) => acc && acc[part], obj);
}
</script>

<template>
  <tr v-for="user in data">
    <td v-for="(path, key) in displayColumns" :key="key">

      <template v-if="key === 'Photo'">
        <img :src="getNestedProperty(user, path)" :alt="`${user.name.first} Photo`" />
      </template>

      <template v-else-if="Array.isArray(path)">
        {{ path.map(p => getNestedProperty(user, p)).join(' ') }}
      </template>

      <template v-else-if="key === 'Genre'">
        {{ getNestedProperty(user, path) === 'male' ? "👨" : "👩" }}
      </template>

      <template v-else>
        {{ getNestedProperty(user, path) }}
      </template>
    </td>
  </tr>

</template>

<style scoped>
</style>
