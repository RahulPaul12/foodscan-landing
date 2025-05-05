import { ref, onMounted, onBeforeUnmount } from "vue";
export function useSticky() {
    const isSticky = ref(false)
    const handleSticky = () => {
        if (window.scrollY > 0) isSticky.value = true;
        else isSticky.value = false;
    }
    onMounted(() => window.addEventListener('scroll', handleSticky))
    onBeforeUnmount(() => window.addEventListener('scroll', handleSticky))
    return {
        isSticky
    }
}