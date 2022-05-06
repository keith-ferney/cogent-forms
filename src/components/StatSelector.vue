<template>
  <div class="flex grow">
    <div v-for="val in values" class="grow">
      <input :id="name+val" :value="val" class="sr-only" :name="name" type="radio" v-model="data" v-on:change="output">
      <label :for="name+val" :class="labelClasses(val)"
             class="border border-black flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none text-gray-400">
        <span class="font-extrabold" :class="textClass">
          {{ val }}
        </span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "stat-selector",
  props: ["name", "size", "overrideValues", "value"],
  data() {
    return {
      data: '' // store the data
    };
  },
  methods: {
    output() {
      // pass back to the parent
      this.$emit('input', this.data);
    },
      labelClasses(value) {
      return {
        "bg-gray-300": value === "-1",
        "px-1": this.size === "xs" || this.size === "sm",
        "py-1": !this.size,
      };
    },
  },
  computed: {
    values() {
      if (this.overrideValues?.length > 0) {
        return this.overrideValues;
      }
      return ["-1", "+1", "+2", "+3", "+4"];
    },
    textClass() {
      if (this.size === "xs") {
        return "text-xs";
      }
      if (this.size === "sm") {
        return "text-sm";
      }
      return "text-lg";
    }
  },
  watch: {
    value(val, oldVal) {
      this.data = val;
    }
  }
};
</script>