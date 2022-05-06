<template>
  <div>
    <span class="flex gap-1 items-baseline"><h4 class="font-bold">{{ abbreviatedTitle }}</h4><small>{{ title }}</small></span>
    <stat-selector :name="name" v-model="data" />
    <small>
      {{ helpText }}
    </small>
  </div>
</template>
<script>
import StatSelector from "./StatSelector";

export default {
  name: "attribute-card",
  components: { StatSelector },
  props: ["title", "abbreviatedTitle", "name", "helpText", "value"],
  data() {
    return {
      data: '' // store the data
    };
  },
  watch: {
    data: function(val, oldVal) {
      this.output();
    },
    value(val, oldVal) {
      this.data = val;
    }
  },
  methods: {
    output: function () {
      // pass back to the parent
      this.$emit('input', this.data);
    }
  }
};
</script>