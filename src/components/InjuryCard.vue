<template>
  <div>
    <h4 class="font-bold text-lg w-full text-center">Injuries:</h4>
    <table>
      <tbody>
      <tr class="h-10">
        <td colspan="6">
          <stat-selector v-model="data.level" name="injury_level" :override-values="['1','2','3','4','5','6']"></stat-selector>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="6" class="text-center">
          When the level of injury exceeds your <b>BASE ROLL</b><br />
          <b>(3) + ATTRIBUTE POINTS</b>, you fall unconscious.
        </td>
      </tr>
      </tfoot>
    </table>
    <h4 class="font-bold text-lg w-full text-center">Lingering Injuries:</h4>
    <table class="table-auto">
      <thead>
      <tr>
        <th>Injury:</th>
        <th class="w-24">Penalty:</th>
      </tr>
      </thead>
      <tbody>
      <tr class="h-10 border-t-transparent border-b-transparent" v-for="i in 6" >
        <th>
          <text-input v-model="data.lingering['injury'+i].name" :name="'injury'+i" label="" />
        </th>
        <th>
          <text-input v-model="data.lingering['injury'+i].penalty" :name="'injuryPenalty'+i" label="" />
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import StatSelector from "./StatSelector.vue";
import TextInput from "./TextInput";

export default {
  name: "injury-card",
  components: {TextInput, StatSelector },
  props: ["value"],
  data() {
    return {
      data: {
        level: '',
        lingering: {
          injury1: {
            name: '',
            penalty: ''
          },
          injury2: {
            name: '',
            penalty: ''
          },
          injury3: {
            name: '',
            penalty: ''
          },
          injury4: {
            name: '',
            penalty: ''
          },
          injury5: {
            name: '',
            penalty: ''
          },
          injury6: {
            name: '',
            penalty: ''
          },
        },
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