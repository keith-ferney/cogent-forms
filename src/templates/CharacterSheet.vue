<script setup lang="ts"></script>
<template>
  <Layout>
  <form class="container mx-auto flex flex-col gap-7">

    <div class="grid md:grid-cols-[1fr_auto_1fr] gap-1 md:gap-10 md:justify-between justify-items-center justify-center md:mx-8">
      <div class="w-full md:w-fit flex flex-col gap-1">
        <h4>Character Sheet:</h4>
        <text-input v-model="characterSheet.character" name="character" label="Character:" />
        <text-input v-model="characterSheet.player" name="Player" label="Player:" />
      </div>
      <g-image class="h-24 w-24 md:order-none order-first" src="~/logo.svg" />
      <div class="flex flex-col gap-1">
        <div class="flex max-w-md">
          <text-input v-model="characterSheet.age" name="age" label="Age:" />
          <text-input v-model="characterSheet.race" name="race" label="Race:" />
        </div>
        <text-input v-model="characterSheet.bodyType" name="body_type" label="Body Type:" />
        <text-input v-model="characterSheet.disablingCharacteristics" name="disabling_characteristics" label="Disabling Characteristics:" />
      </div>
    </div>

    <stat-section title="Attributes:">
      <attribute-card title="(Strength)" abbreviated-title="STR:" name="strength" v-model="characterSheet.attributes.strength"
                      help-text="For each additional point in STR: severity in injury cna be reduced once every combat encounter" />

      <attribute-card title="(Reflex)" abbreviated-title="REF:" name="reflex" v-model="characterSheet.attributes.reflex"
                      help-text="For each additional point in REF: turn priority is Higher at the beginning of combat encounters" />

      <attribute-card title="(Intelligence)" abbreviated-title="INT:" name="intelligence" v-model="characterSheet.attributes.intelligence"
                      help-text="For each additional point in STR: severity in injury cna be reduced once every combat encounter" />
    </stat-section>

    <stat-section title="Skills:">
      <skill-card skill-type="Strength">
        <skill-selector label="Endurance" name="endurance" v-model="characterSheet.skillTypes.strength.endurance"/>
        <skill-selector label="Athletics" name="athletics" v-model="characterSheet.skillTypes.strength.athletics"/>
        <skill-selector label="Grip" name="grip" v-model="characterSheet.skillTypes.strength.grip"/>
        <skill-selector label="Swim" name="swim" v-model="characterSheet.skillTypes.strength.swim"/>
        <skill-selector label="Throw" name="throw" v-model="characterSheet.skillTypes.strength.throw_attr"/>
      </skill-card>

      <skill-card skill-type="Reflex">
        <skill-selector label="Perception" name="perception" v-model="characterSheet.skillTypes.reflex.perception"/>
        <skill-selector label="Acrobatics" name="acrobatics" v-model="characterSheet.skillTypes.reflex.acrobatics"/>
        <skill-selector label="Ride/Pilot" name="ride_Pilot" v-model="characterSheet.skillTypes.reflex.ridePilot"/>
        <skill-selector label="Slight of Hand" name="slight_of_hand" v-model="characterSheet.skillTypes.reflex.slightOfHand"/>
        <skill-selector label="Stealth" name="stealth" v-model="characterSheet.skillTypes.reflex.stealth"/>
      </skill-card>

      <skill-card skill-type="Intelligence">
        <skill-selector label="General Knowledge" name="general_knowledge" v-model="characterSheet.skillTypes.intelligence.generalKnowledge"/>
        <skill-selector label="Deception" name="deception" v-model="characterSheet.skillTypes.intelligence.deception"/>
        <skill-selector label="Infiltration" name="infiltration" v-model="characterSheet.skillTypes.intelligence.infiltration"/>
        <skill-selector label="Persuasion" name="persuasion" v-model="characterSheet.skillTypes.intelligence.persuasion"/>
        <skill-selector label="Survival" name="survival" v-model="characterSheet.skillTypes.intelligence.survival"/>
      </skill-card>
    </stat-section>

    <stat-section title="Vocations:">
      <vocation-card name="vocation1" v-model="characterSheet.vocation1" />
      <vocation-card name="vocation2" v-model="characterSheet.vocation2"/>
      <vocation-card name="vocation3" v-model="characterSheet.vocation3"/>
    </stat-section>

    <stat-section title="State:">
      <injury-card v-model="characterSheet.injuries" />
      <div class="flex flex-col">
        <div>
          <h4 class="font-bold text-lg text-center">Destiny Points</h4>
          <stat-selector name="destiny_points" :override-values="['1','2','3','4','5']" v-model="characterSheet.destinyPoints"></stat-selector>
          <h4 class="font-bold text-lg text-center">Commerce Points</h4>
          <stat-selector name="commerce_points" :override-values="['0','1','2','3','4','5','6','7','8']" v-model="characterSheet.commercePoints"></stat-selector>
          <h4 class="font-bold text-lg text-center">Equipment and Inventory</h4>
        </div>
        <textarea v-autogrow class="h-fit w-full md:h-auto grow resize-none" name="equipment_and_inventory" id="equipment_and_inventory" v-model="characterSheet.equipmentAndInventory"></textarea>
      </div>
      <div class="flex flex-col">
        <h4 class="font-bold text-lg text-center">Notes</h4>
        <textarea v-autogrow class="w-full h-auto grow resize-none" name="notes" id="notes" v-model="characterSheet.notes"></textarea>
      </div>
    </stat-section>
  </form>
</Layout>
</template>
  <script>
import StatSection from "../components/StatSection.vue";
import AttributeCard from "../components/AttributeCard.vue";
import SkillCard from "../components/SkillCard.vue";
import SkillSelector from "../components/SkillSelector.vue";
import VocationCard from "../components/VocationCard.vue";
import InjuryCard from "../components/InjuryCard.vue";
import StatSelector from "../components/StatSelector.vue";
import TextInput from "../components/TextInput.vue";

export default {
  // name: "CharacterSheet",
  components: {
    TextInput,
    StatSelector,
    InjuryCard,
    VocationCard,
    SkillCard,
    AttributeCard,
    StatSection,
    SkillSelector
  },
  data() {
    return {
      characterSheet: {
        character: '',
        player: '',
        age: '',
        race: '',
        bodyType: '',
        disablingCharacteristics: '',
        attributes: {
          strength: '',
          reflex: '',
          intelligence: ''
        },
        skillTypes: {
          strength: {
            endurance: '',
            athletics: '',
            grip: '',
            swim: '',
            throw_attr: '',
          },
          reflex: {
            perception: '',
            acrobatics: '',
            ridePilot: '',
            slightOfHand: '',
            stealth: '',
          },
          intelligence: {
            generalKnowledge: '',
            deception: '',
            infiltration: '',
            persuasion: '',
            survival: '',
          }
        },
        vocation1: {
          details: {
            name: '',
            type: '',
            level: '',
          },
          subSkill1: {name: '', type: '', level: ''},
          subSkill2: {name: '', type: '', level: ''},
          subSkill3: {name: '', type: '', level: ''},
          subSkill4: {name: '', type: '', level: ''},
        },
        vocation2: {
          details: {
            name: '',
            type: '',
            level: '',
          },
          subSkill1: {name: '', type: '', level: ''},
          subSkill2: {name: '', type: '', level: ''},
          subSkill3: {name: '', type: '', level: ''},
          subSkill4: {name: '', type: '', level: ''},
        },
        vocation3: {
          details: {
            name: '',
            type: '',
            level: '',
          },
          subSkill1: {name: '', type: '', level: ''},
          subSkill2: {name: '', type: '', level: ''},
          subSkill3: {name: '', type: '', level: ''},
          subSkill4: {name: '', type: '', level: ''},
        },
        injuries: {
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
        },
        destinyPoints: '',
        commercePoints: '',
        equipmentAndInventory: '',
        notes: '',
      },
      characterSheets: null,
      id: null,
    }
  },
  mounted() {
    const { id } = this.$route.params
    if (id) {
      this.id = id
    }

    let cachedSheets = localStorage.getItem('characterSheets');
    cachedSheets = JSON.parse(cachedSheets && cachedSheets !== '[object Object]' ? cachedSheets : '{}');
    this.characterSheets = cachedSheets;

    let cachedSheet = cachedSheets[id];

    if(JSON.stringify(cachedSheet)) {
      this.characterSheet = cachedSheet;
    }
  },
  watch: {
    characterSheet: {
      handler(val, oldVal) {
        this.characterSheets[this.id] = this.characterSheet;
        localStorage.setItem('characterSheets', JSON.stringify(this.characterSheets));
      },
      deep: true
    }
  },
};
</script>