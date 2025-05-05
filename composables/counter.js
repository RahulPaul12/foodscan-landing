import { ref, onUnmounted, onMounted } from 'vue';

export const useCounter = (endValue = 0, interval) => {
  const counter = ref(0);
  let intervalId = null;

  onMounted(() => {
    intervalId = setInterval(() => {
        if (counter.value < endValue) {
          counter.value++;
        }
      }, interval);
  });

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  return {
    counter
  };
};
;