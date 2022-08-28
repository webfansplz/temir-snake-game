import { ref } from 'vue'

const score = ref(0)
export function useScore(count = 10) {
  function add() {
    score.value += count
  }

  function reset() {
    score.value = 0
  }
  return {
    score,
    add,
    reset,
  }
}
