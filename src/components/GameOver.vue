<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useScore } from '../composables'
const { score } = useScore()
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
        You Got {{ score }} Points!
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
          Retry (r)
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
