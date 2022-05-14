<script setup lang="ts"></script>
<template>
  <Layout>
    <div>
      <div class=" flex flex-col justify-center">
        <g-link class="rounded border my-3 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center" :to="'/character-sheet/'+newId()">
          Create New CharacterSheet
        </g-link>
      </div>
      <div class="flex flex-col " v-for="(characterSheet, id) in characterSheets">
        <g-link class="rounded border my-3 py-2 px-4 text-white bg-gray-600 hover:bg-gray-700 text-center" :to="'/character-sheet/'+id">
          Character {{ id }}: {{ characterSheet.character }} {{ characterSheet.player }}
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {
      characterSheets: {},
    };
  },

  methods: {
    newId() {
      let keys = Object.keys(this.characterSheets).map(function (o) {
        return parseInt(o)
      });
      return keys ? Math.max(...keys) + 1 : 0;
    },
  },

  mounted() {
    let cachedSheets = localStorage.getItem('characterSheets');
    cachedSheets = JSON.parse(cachedSheets && cachedSheets !== '[object Object]' ? cachedSheets : '{}');

    if (JSON.stringify(cachedSheets) !== '{}') {
      this.characterSheets = cachedSheets;
    }
  },
}
</script>