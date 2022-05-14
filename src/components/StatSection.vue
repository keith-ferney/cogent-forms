<template>
  <div>
    <h4 class="bg-gray-700 text-white font-bold w-100 text-center">{{ title }}</h4>
    <div class="grid md:grid-cols-3 gap-4 mt-2">
      <slot />
    </div>

  </div>
</template>
<script>
export default {
  name: "stat-section",
  props: ["title"]
};
</script>