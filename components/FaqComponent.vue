<template>
    <section class="mb-16 md:mb-34">
        <div class="container">
            <div class="mb-12 text-center max-w-[554px] w-full mx-auto">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title bg-white">
                    Find Your Answer Here
                </span>
                <h2 class="mb-3 text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">Frequently Asked</span>
                    <span class="inline text-primary"> Questions</span>
                </h2>
                <p class="text-base md:text-lg font-medium text-center">
                    Do you need some help with something or do you have questions on some features?
                </p>
            </div>
            <div v-for="(faq,index) in faqs" @click="handleAccordion(index)" class="group p-6 text-left w-full text-black bg-[#F7F7F7] rounded-xl mb-6 cursor-pointer">
                <div class="flex items-center justify-between group-hover:text-primary">
                    <span class="lg:text-[22px]/[22px] text-base font-client font-semibold">{{ faq.question }}</span>
                    <span class="accordion-icon text-center w-5"><i :class="[faqOpen[index] == true?'lab-line-minus-cirlce': 'lab-line-add-circle']" class="text-2xl text-primary"></i></span>
                </div>
                <div ref="faqcontent"  class="h-0 origin-top faq-text overflow-hidden transition-all duration-300 ease-in-out">
                    <p class="text-base font-normal font-client pt-6">{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import faqs from '@/assets/json/faq.json'
let faqOpen = ref({})
const handleAccordion = (index) => {
      faqOpen.value = { [index]: !faqOpen.value[index] }
      document.querySelectorAll('.faq-text').forEach((content, i) => {
        if (i !== index) {
          content.style.height = '0px'
        } else {
          if (faqOpen.value[index]) {
            content.style.height = `${content.scrollHeight}px`
          } else {
            content.style.height = '0px'
          }
        }
      })
}
</script>
