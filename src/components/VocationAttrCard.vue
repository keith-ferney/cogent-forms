<template>
  <div class="flex flex-col gap-2">
    <text-input :name="['[',name,']','name'].join()" :label="label" v-model="data.name" />
    <div class="flex justify-center gap-2 w-1/2 mx-auto">
      <stat-selector :size="size" :label="label" :name="['[',name,']','type'].join()"
                     :override-values="overrideValues" v-model="data.type"></stat-selector>
    </div>
    <skill-selector :override-values="['+1', '+2', '+3', '+4']" :no-padding="true" :size="size" :name="['[',name,']','attr'].join()" v-model="data.level" />
  </div>
</template>
<script>
import SkillSelector from "./SkillSelector.vue";
import TextInput from "./TextInput.vue";
import StatSelector from "./StatSelector.vue";

export default {
  name: "vocation-attr-card",
  props: ["name", "size", "label", "value", "subSkill"],
  components: { SkillSelector, TextInput, StatSelector },
  computed: {
    overrideValues() {
      let overrides = ['str','ref', 'int'];
      if (this.subSkill === true) {
        overrides.push('cbt')
      }
      return overrides
    }
  },
  data() {
    return {
      data: {
          name: '',
          type: '',
          level: '',
      }
    }
  },
  watch: {
    data: {
      handler(val, oldVal) {
        this.output();
      },
      deep: true
    },
    value(val, oldVal) {
      this.data = val;
    }
  },
  methods: {
    output() {
      // pass back to the parent
      this.$emit('input', this.data);
    }
  }
};
</script>