import { ref } from 'vue'
import { useInput } from '@temir/core'
import { useScore } from '.'

// unplayed . playing . over . exit
const playStatus = ref('unplayed')

export function useGame() {
  const { reset } = useScore()
  function toggle(status: 'unplayed' | 'playing' | 'over' | 'exit') {
    playStatus.value = status
  }

  useInput((input, { escape }) => {
    if (escape) {
      toggle('exit')
      setTimeout(() => {
        process.exit(0)
      }, 0)
    }

    if (playStatus.value === 'playing')
      return

    const retryKey = ['r', 'R']
    if (retryKey.includes(input))
      reset()

    if (['s', 'S', ...retryKey].includes(input))
      toggle('playing')
  }, {
    isActive: true,
  })

  return {
    playStatus,
    toggle,
  }
}
