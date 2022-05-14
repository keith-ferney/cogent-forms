<template>
  <div class="flex flex-col gap-4">
    <vocation-attr-card :name="name" label="Vocation" v-model="data.details" />
    <div class="grid grid-cols-2 grid-rows-2 gap-4">
      <vocation-attr-card :sub-skill="true" :name="[name,'][skill1'].join()" label="Skill" size="xs" v-model="data.subSkill1"/>
      <vocation-attr-card :sub-skill="true" :name="[name,'][skill2'].join()" label="Skill" size="xs" v-model="data.subSkill2"/>
      <vocation-attr-card :sub-skill="true" :name="[name,'][skill3'].join()" label="Skill" size="xs" v-model="data.subSkill3"/>
      <vocation-attr-card :sub-skill="true" :name="[name,'][skill4'].join()" label="Skill" size="xs" v-model="data.subSkill4"/>
    </div>
  </div>
</template>
<script>
import VocationAttrCard from "./VocationAttrCard.vue";

export default {
  name: "vocation-card",
  props: ["name", "value"],
  components: { VocationAttrCard },
  data() {
    return {
      data: {
        details: {
          name: '',
          type: '',
          level: '',
        },
        subSkill1: {name: '', type: '', level: ''},
        subSkill2: {name: '', type: '', level: ''},
        subSkill3: {name: '', type: '', level: ''},
        subSkill4: {name: '', type: '', level: ''},
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
    output: function () {
      // pass back to the parent
      this.$emit('input', this.data);
    }
  }

};
</script>