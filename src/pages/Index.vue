<script setup lang="ts"></script>
<template>
  <Layout>
  <form class="container mx-auto flex flex-col gap-3">

    <div class="grid grid-cols-[1fr_auto_1fr] gap-10 justify-between mx-8">
      <div>
        <h4>Character Sheet:</h4>
        <text-input name="character" label="Character:" />
        <text-input name="Player" label="Player:" />
      </div>
      <g-image class="h-24 w-24" src="~/logo.svg" />
      <div>
        <div class="flex max-w-md">
          <text-input name="age" label="Age:" />
          <text-input name="race" label="Race:" />
        </div>
        <text-input name="body_type" label="Body Type:" />
        <text-input name="disabling_characteristics" label="Disabling Characteristics:" />
      </div>
    </div>

    <stat-section title="Attributes:">
      <attribute-card title="(Strength)" abbreviated-title="STR:" name="strength"
                      help-text="For each additional point in STR: severity in injury cna be reduced once every combat encounter" />

      <attribute-card title="(Reflex)" abbreviated-title="REF:" name="reflex"
                      help-text="For each additional point in REF: turn priority is Higher at the beginning of combat encounters" />

      <attribute-card title="(Intelligence)" abbreviated-title="INT:" name="intelligence"
                      help-text="For each additional point in STR: severity in injury cna be reduced once every combat encounter" />
    </stat-section>

    <stat-section title="Skills:">
      <skill-card skill-type="Strength">
        <skill-selector label="Endurance" name="endurance" />
        <skill-selector label="Athletics" name="athletics" />
        <skill-selector label="Grip" name="grip" />
        <skill-selector label="Swim" name="swim" />
        <skill-selector label="Throw" name="throw" />
      </skill-card>

      <skill-card skill-type="Reflex">
        <skill-selector label="Perception" name="perception" />
        <skill-selector label="Acrobatics" name="acrobatics" />
        <skill-selector label="Ride/Pilot" name="ride_Pilot" />
        <skill-selector label="Slight of Hand" name="slight_of_hand" />
        <skill-selector label="Stealth" name="stealth" />
      </skill-card>

      <skill-card skill-type="Intelligence">
        <skill-selector label="General Knowledge" name="general_knowledge" />
        <skill-selector label="Deception" name="deception" />
        <skill-selector label="Infiltration" name="infiltration" />
        <skill-selector label="Persuasion" name="persuasion" />
        <skill-selector label="Survival" name="survival" />
      </skill-card>
    </stat-section>

    <stat-section title="Vocations:">
      <vocation-card name="vocation1" />
      <vocation-card name="vocation2" />
      <vocation-card name="vocation3" />
    </stat-section>

    <stat-section title="State:">
      <injury-card />
      <div class="flex flex-col">
        <div>
          <h4 class="font-bold text-lg text-center">Destiny Points</h4>
          <stat-selector name="destiny_points" :override-values="['1','2','3','4','5']"></stat-selector>
          <h4 class="font-bold text-lg text-center">Commerce Points</h4>
          <stat-selector name="destiny_points" :override-values="['0','1','2','3','4','5','6','7','8']"></stat-selector>
          <h4 class="font-bold text-lg text-center">Equipment and Inventory</h4>
        </div>
        <textarea class="w-full h-auto grow resize-none"></textarea>
      </div>
      <div class="flex flex-col">
        <h4 class="font-bold text-lg text-center">Notes</h4>
        <textarea class="w-full h-auto grow resize-none"></textarea>
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
  components: {
    TextInput,
    StatSelector,
    InjuryCard,
    VocationCard,
    SkillCard,
    AttributeCard,
    StatSection,
    SkillSelector
  }
};
</script>