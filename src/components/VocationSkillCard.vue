<template>
  <div>
    <text-input name="skill" label="skill" />
    <skill-selector size="xs" :name="name" />
  </div>
</template>
<script>
import SkillSelector from "./SkillSelector.vue";
import TextInput from "./TextInput.vue";

export default {
  name: "vocation-skill-card",
  props: ["name"],
  components: { SkillSelector, TextInput }
};
</script>