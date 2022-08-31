<template>
  <h3 class="mb-6">Home</h3> 
  <p class="mb-6">Name in store is: {{ name }}</p>
  <input type="text" class="p-2 mr-4 border border-gray rounded" v-model="newName" />
  <button class="p-2 bg-blue" @click="saveName">Submit</button>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()
const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function saveName(){
  store.dispatch('saveName', newName.value)
  newName.value = ''
  router.push('/about')
}

</script>

<style>

</style>