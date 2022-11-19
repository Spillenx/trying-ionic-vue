<template>
  <base-layout page-title="Monkey Business">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"> </memories-list
  ></base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList.vue'
import { add } from 'ionicons/icons'
import { IonButton, IonIcon } from '@ionic/vue'

export default {
  components: { MemoriesList, IonButton, IonIcon },
  data() {
    return {
      add
    }
  },
  computed: {
    memories() {
      return this.$store.getters.memories
    }
  }
}
</script>
