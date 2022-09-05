import { computed, ref } from 'vue'
import { useInput } from '@temir/core'
import { useGame, useScore } from '.'

export function useSnake() {
  const basic = 28
  const snakeIcon = '🟧'
  const backgroundIcon = '⬛'
  const foodIcon = '🍗'

  const arena = ref<string[]>([])
  // left: -1 ,right: 1,bottom:28, top: -28
  const direction = ref(1)
  const snakeBody = ref([30, 29])
  const head = ref(0)
  const foodCoord = ref(77)
  const timer = ref(null)

  useInput(onKeyBoard, { isActive: true })
  const { score, add } = useScore()
  const { toggle } = useGame()

  const speed = computed(() => 100 - score.value / 10)

  const grids = computed(() => {
    const result = []
    while (result.length < basic)
      result.push(arena.value.slice(basic * result.length, basic * (result.length + 1)))

    return result
  })

  function initArena() {
    arena.value = Array.from({ length: basic * basic }, () => backgroundIcon)
  }

  function isOutOfRange(h: number) {
    return snakeBody.value.indexOf(h, 1) > 0
      || h < 0
      || h > basic * basic - 1
      || (direction.value === 1 && h % basic === 0)
      || (direction.value === -1 && h % basic === basic - 1)
  }

  function generateFood() {
    const food = Math.floor(Math.random() * basic * basic)
    if (snakeBody.value.includes(food)) {
      generateFood()
      return
    }
    foodCoord.value = food
  }

  function move() {
    const h = snakeBody.value[0]
    head.value = h + direction.value
    snakeBody.value.unshift(head.value)

    if (isOutOfRange(head.value)) {
      clearInterval(timer.value)
      toggle('over')
    }

    if (head.value === foodCoord.value) {
      add()
      generateFood()
    }

    else { snakeBody.value.pop() }
  }

  function onKeyBoard(input, { upArrow, downArrow, leftArrow, rightArrow }) {
    input = input.toLowerCase()

    const newD = {
      true: direction.value,
      [input === 'w' || upArrow]: -basic,
      [input === 'a' || leftArrow]: -1,
      [input === 's' || downArrow]: basic,
      [input === 'd' || rightArrow]: 1,
    }['true']

    // * -1 : 反向操作
    if (direction.value !== newD * -1) direction.value = newD
  }

  function init() {
    initArena()
    timer.value = setInterval(move, speed.value)
  }

  return {
    basic,
    grids,
    snakeBody,
    foodCoord,
    snakeIcon,
    backgroundIcon,
    foodIcon,
    init,
  }
}
