<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useSnake } from '../composables'

const { basic, grids, snakeBody, init, snakeIcon, backgroundIcon, foodIcon, foodCoord } = useSnake()

function normalizeItem(
  x: number, y: number,
) {
  const coord = x * basic + y + 1
  if (snakeBody.value.includes(coord))
    return snakeIcon

  else if (coord === foodCoord.value)
    return foodIcon

  else
    return backgroundIcon
}

init()
</script>

<template>
  <TBox
    :width="86"
    :height="30"
    border-style="round"
    flex-direction="column"
  >
    <TBox
      v-for="(_, x) in grids"
      :key="x"
      flex-direction="row"
    >
      <TBox
        v-for="(__, y) in _"
        :key="`${x}-${y}`"
      >
        <TText>
          {{ normalizeItem(x, y) }}
        </TText>
      </TBox>
    </TBox>
  </TBox>
</template>
