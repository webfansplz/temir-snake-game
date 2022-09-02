<script lang="ts" setup>
import { computed } from 'vue'
import { TBox, TText } from '@temir/core'
import { useScore } from '../composables'
const { score } = useScore()
const medal = computed(() => ({
  [+(score.value >= 800)]: '🏆',
  [+(score.value >= 500 && score.value < 800)]: '🥇',
  [+(score.value >= 200 && score.value < 500)]: '🥈',
  [+(score.value > 0 && score.value < 200)]: '🥉',
  [+(score.value === 0)]: '😂',
}[1]))
</script>

<template>
  <TBox
    :width="86"
    :height="30"
    border-style="bold"
    flex-direction="column"
    justify-content="center"
    align-items="center"
  >
    <TBox :height="3">
      <TText color="#fff">
        {{ medal }} You got {{ score }} points!
      </TText>
    </TBox>
    <TBox :height="3">
      <TBox
        border-style="round"
        justify-content="center"
        :width="20"
        :margin-right="5"
        border-color="yellow"
      >
        <TText color="yellow">
          Retry (R)
        </TText>
      </TBox>
      <TBox
        border-style="round"
        justify-content="center"
        :width="20"
      >
        <TText>
          Quit (ESC)
        </TText>
      </TBox>
    </TBox>
  </TBox>
</template>
