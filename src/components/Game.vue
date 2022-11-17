<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useSnake } from '../composables'

const { basic, grids, snakeBody, init, snakeIcon, foodIcon, foodCoord } = useSnake()

function normalizeItem(
  x: string[], y: number,
) {
  const start = basic * y
  const end = basic * y + basic - 1
  const content = x.slice(0)
  snakeBody.value.forEach((item) => {
    if (item >= start && item <= end) {
      if (item === start)
        content[0] = snakeIcon

      else if (item === end)
        content[content.length - 1] = snakeIcon

      else
        content[item % basic] = snakeIcon
    }
  })

  if (foodCoord.value === start)
    content[0] = foodIcon
  else if (foodCoord.value === end)
    content[content.length - 1] = foodIcon
  else if (foodCoord.value > start && foodCoord.value < end)
    content[foodCoord.value % basic] = foodIcon

  return content.join('')
}

init()
</script>

<template>
  <TBox
    border-style="round"
    flex-direction="column"
  >
    <TBox
      v-for="(_, y) in grids"
      :key="y"
      flex-direction="row"
    >
      <TText>
        {{ normalizeItem(_, y) }}
      </TText>
    </TBox>
  </TBox>
</template>
