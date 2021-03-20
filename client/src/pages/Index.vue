<template>
   <q-page class="flex flex-center my-page">
      <div class="column items-center" style="width: 80%; max-width: 300px;">
         <q-btn
            push
            round
            class="shadow-8"
            color="primary"
            icon="casino"
            no-caps
            stack
            size="64px"
            @click="getRandomTrait"
         >
            <span class="text-h6">{{ $t('roll') }}</span>
         </q-btn>

         <template v-if="trait.name">
            <q-card class="q-mt-lg my-card" flat bordered>
               <q-card-section class="q-pa-sm bg-accent">
                  <div class="text-overline text-white">{{ trait.type }} type</div>
               </q-card-section>
               <q-card-section class="column items-center">
                  <q-avatar color="accent" size="64px">
                     <q-icon class="text-white" :name="`img:${imageUrl}`" />
                  </q-avatar>
                  <div class="text-h5 q-mt-sm q-mb-xs">{{ trait.name }}</div>
                  <div class="text-caption text-grey">
                     {{ trait.description }}
                  </div>
               </q-card-section>
            </q-card>
         </template>

         <template v-else>
            <div class="q-mt-lg my-card"></div>
         </template>
      </div>
   </q-page>
</template>

<script>
import { instance as axios } from 'boot/axios'

export default {
   name: 'PageIndex',

   data() {
      return {
         trait: {},
      }
   },

   computed: {
      imageUrl() {
         return `${process.env.API_BASEURL}/${this.trait.icon}`
      },
   },

   methods: {
      async getRandomTrait() {
         console.log(process.env.API_BASEURL)
         const result = await axios.get(`${process.env.API_BASEURL}/traits/randomize`)
         console.log(result)
         if (result.status === 200) {
            this.trait = result.data
         }
      },
   },
}
</script>

<style lang="sass" scoped>
.my-page
   background-image: url('/tft1.jpg')
   background-position: center
   background-size: cover
.my-card
  width: 90%
  max-width: 300px
  min-height: 388px
</style>
