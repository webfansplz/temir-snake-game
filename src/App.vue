<script lang="ts" setup>
import { computed } from 'vue'
import { TBox, TText } from '@temir/core'
import { useGame } from './composables'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Game from './components/Game.vue'
import GameOver from './components/GameOver.vue'
import Exit from './components/Exit.vue'

const { playStatus } = useGame()
const activeComponent = computed(() => {
  return {
    unplayed: Home,
    playing: Game,
    over: GameOver,
    exit: Exit,
  }[playStatus.value]
})
</script>

<template>
  <TBox
    :width="100"
    justify-content="center"
    align-items="center"
    flex-direction="column"
    border-style="double"
  >
    <Header />
    <component :is="activeComponent" />
  </TBox>
</template>
