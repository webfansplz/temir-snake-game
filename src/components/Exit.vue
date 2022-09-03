<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import TLink from '@temir/link'
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
      <TLink
        url="https://github.com/webfansplz/temir-snake-game"
        :fallback="false"
      >
        <TText color="yellow">
          Temir Snake Game
        </TText>
      </TLink>
    </TBox>
    <TBox :height="3">
      <TText>
        See you later !
      </TText>
    </TBox>
  </TBox>
</template>

