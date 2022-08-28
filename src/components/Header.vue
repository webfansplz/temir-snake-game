<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useGame, useScore } from '../composables'
const { score } = useScore()
const { playStatus } = useGame()
</script>

<template>
  <TBox
    width="100"
    height="2"
    :padding-x="6"
    :justify-content="
      playStatus === 'playing'
        ? 'space-between'
        : 'center'"
  >
    <TText color="yellow">
      Snake Game
    </TText>
    <TText v-if="playStatus === 'playing'">
      Score:<TText color="yellow">
        {{ score }}
      </TText>
    </TText>
  </TBox>
</template>
