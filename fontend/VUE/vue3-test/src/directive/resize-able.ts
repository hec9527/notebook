import type { Directive } from 'vue'

import type { CSSProperties } from 'vue'

export type ResizeType = CSSProperties['resize']

const vResizeAble: Directive<HTMLElement, ResizeType> = {
  mounted(el, binding) {
    el.style.resize = binding.value || 'both'
    el.style.border = '1px solid #444'

    const overflow = window.getComputedStyle(el).overflow

    if (overflow === 'visible') {
      el.style.overflow = 'auto'
    }
  },
  updated(el, binding) {
    console.log('update', el, binding)
  },
}

export default vResizeAble
