<template>
  <div>
    <h4 class="font-bold">{{ label }}</h4>
    <div class="flex" :class="{'pl-10': !noPadding}">
      <stat-selector :override-values="overrideValues" :size="size" :label="label" :name="name" v-model="data"></stat-selector>
      <div class="resize-none border border-black text-gray-500 flex p-1"
           :class="{'text-xs': size === 'xs'}">
        roll:
        <span class="font-bold" :class="{'text-xs': size === 'xs'}">{{ roll }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import StatSelector from "./StatSelector.vue";

export default {
  name: "skill-selector",
  components: { StatSelector },
  props: ["name", "size", "label", "noPadding", "value", "overrideValues"],
  computed: {
    roll() {
      return 4;
    }
  },
  data() {
    return {
      data: ''
    }
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