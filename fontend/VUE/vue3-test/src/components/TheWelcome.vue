<!-- <template>
  {{ node }}
</template> -->

<script lang="ts">
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)

    const el = h('div', 'repeat div')

    return () =>
      h('div', { onClick: () => count.value++ }, [
        { ...el },
        { ...el },
        h('span', `click time: ${count.value}`),
      ])
  },
})
</script>

<style>
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  animation: zoom-in 0.5s ease-in-out;
}

.fade-leave-active {
  animation: zoom-out 0.5s ease-in-out;
}

@keyframes fade-in {
  0% {
    transform: translateX(-80px) scale(0.9);
    opacity: 0;
  }
  75% {
    transform: translateX(20px) scale(1.1);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes fade-out {
  0% {
    transform: translateX(0px);
    opacity: 0;
  }
  25% {
    transform: translateX(-20px) scale(1.1);
    opacity: 1;
  }
  100% {
    transform: translateX(80px) scale(0.1);
  }
}

@keyframes zoom-in {
  0% {
    opacity: 0.4;
    transform: scale(0.4);
  }

  80% {
    opacity: 1;
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes zoom-out {
  100% {
    opacity: 0.4;
    transform: scale(0.4);
  }

  20% {
    opacity: 1;
    transform: scale(1.05);
  }

  0% {
    transform: scale(1);
  }
}
</style>
