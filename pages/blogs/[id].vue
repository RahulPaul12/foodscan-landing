<template>
     <div class="container">
         <div class="pt-10 lg:pt-19 mt-18 mb-16 md:mb-34 max-w-[716px] w-full mx-auto">
              <div class="mb-8 sm:mb-12">
                <h2 class="mb-6 text-3xl md:text-[40px] leading-tight font-bold text-center text-secondary">{{ blogStore.title }}</h2>
                <div class="text-base md:text-lg font-normal text-center text-[#6E7191] flex justify-center gap-8">
                  <p class="flex items-center gap-2">
                    <i class="lab-fill-calendar text-2xl"></i>
                    <span>{{ blogStore.date }}</span>
                  </p>
                  <p class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.19825 3.29918C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.29918C18.8535 3.41086 18.8972 3.52686 18.9323 3.6461C19.3414 5.0333 17.8802 6.64111 14.9577 9.85674L13 12L14.9577 14.1433C17.8802 17.3589 19.3414 18.9667 18.9323 20.3539C18.8972 20.4731 18.8535 20.5891 18.8017 20.7008C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.7008C5.14649 20.5891 5.10282 20.4731 5.06765 20.3539C4.65857 18.9667 6.11981 17.3589 9.0423 14.1433L11 12L9.0423 9.85674C6.11981 6.64111 4.65857 5.0333 5.06765 3.6461C5.10282 3.52686 5.14649 3.41086 5.19825 3.29918ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25H14C14.4142 19.25 14.75 18.9142 14.75 18.5C14.75 18.0858 14.4142 17.75 14 17.75H10ZM9.25 5.5C9.25 5.08579 9.58579 4.75 10 4.75H14C14.4142 4.75 14.75 5.08579 14.75 5.5C14.75 5.91421 14.4142 6.25 14 6.25H10C9.58579 6.25 9.25 5.91421 9.25 5.5Z" fill="#6E7191"/>
                    </svg>
                    <span class="text-secondary">{{ blogStore.readtime }}</span>
                  </p>
                </div>
              </div>
              <nuxt-img class="w-full mb-12" :src="blogStore.coverImg" alt="coverimg"/>
              <p class="text-lg font-normal flex flex-col gap-4 pb-6 mb-6 border-b border-[#D9DBE9]">
                <span>We recently had the privilege of sitting down with one of Hugo Dining's owners, Hass Opatha, to discuss Hugo Dining’s story and his experience using OrderMate. Hass possesses a wealth of knowledge in the hospitality industry, having been involved in hospitality for many years, including running a previous café and working in many iconic venues such as Grossi Florentino, Soho, Tocca, and now operating Hugo Dining.</span>
                <span>Hugo Dining is an Italian eatery located in Essendon, relatively new to the dining scene, having opened late last year. The restaurant was founded by a dynamic group of six partners – Hass Opatha, Mark Natoli, Jordan Cachia, Stefano Maccioni, Sunil Kamboj and Elvis Kamboj, all of whom have backgrounds in hospitality. The restaurant prides itself on a menu influenced by "Mama's cooking style", focusing on simple yet innovative dishes. On their menu, you can expect to find Cavatelli Ragu, arancini, and unique pizzas, named after Ferrari models. However, they are renowned for their Gnocchi, a must-try when dining here. </span>
                <span>Across the group's multiple venues, you can expect a similar menu style, but each venue adds its own twist. Cena in Deer Park and Ladro in Fitzroy stand out as the group’s latest ventures, offering a modern Italian dining experience. </span>
                <span>At Hugo Dining, the culinary focus is on delicious simplicity, while the venue's décor is sophisticated, dark, and sexy, making it a perfect spot for a date night.</span>
                <span>Hugo Dining's journey with OrderMate began through a well-established connection. Hass had previously worked at Craft and Co, where they used OrderMate, giving him firsthand experience with the system. Impressed by its efficiency and usability, this positive encounter sparked interest in exploring OrderMate for Hugo Dining and the group's other venues. The decision was further solidified when they experienced the ease of training and implementation.</span>
                <span>As Hass tells us, the staff at Hugo Dining have embraced OrderMate, appreciating its user-friendly interface and innovative features. The search bar functionality on the POS enables swift item retrieval, and the capability to repeat previous orders helps staff elevate customer experiences. Staff members can even print their own timesheets directly from the OrderMate system, further streamlining administrative processes. OrderMate has become an integral part of daily operations at Hugo Dining, helping staff to better enhance guest satisfaction.</span>
              </p>
              <div class="flex items-center gap-2 text-lg font-medium mb-12">
                <p>Share via:</p>
                <div class="flex items-center gap-3">
                  <nuxt-link to="#"><nuxt-img class="w-8 h-8 rounded-b-full" src="/images/social/Facebook.png" alt="facebook"/></nuxt-link>
                  <nuxt-link to="#"><nuxt-img class="w-8 h-8 rounded-b-full" src="/images/social/Messenger.png" alt="messenger"/></nuxt-link>
                  <nuxt-link to="#"><nuxt-img class="w-8 h-8 rounded-b-full" src="/images/social/Instagram.png" alt="instagram"/></nuxt-link>
                  <nuxt-link to="#"><nuxt-img class="w-8 h-8 rounded-b-full" src="/images/social/Whatsapp.png" alt="whatsapp"/></nuxt-link>
                  <nuxt-link to="#"><nuxt-img class="w-8 h-8 rounded-b-full" src="/images/social/Telegram.png" alt="telegram"/></nuxt-link>
                </div>
              </div>
              <div>
                <h2 class="mb-6 text-3xl md:text-[40px] leading-tight font-bold text-secondary">Related Blogs</h2>
                <ClientOnly>
                    <swiper-container :space-between="24" slides-per-view="auto" :loop="true" :speed="5000" :freeMode="true">
                        <swiper-slide v-for="blog in blogs" class="max-w-[320px] w-full">
                             <nuxt-img :src="blog.coverImg" alt="logo" class="w-full mb-4 rounded-3xl"/>
                             <p class="text-base font-normal flex justify-between leading-5 mb-4"><span>{{ blogStore.date }}</span><span>{{ blogStore.readtime }}</span></p>
                             <h5 class="text-lg md:text-[26px] font-bold mb-4">{{ blog.title }}</h5>
                             <nuxt-link :to="`/blogs/${blog.id}`" @click ="blogStore.setBlog(blog)" class="text-lg font-bold text-primary">Read Blog <i class="ms-2 lab-line-arrow-right-2"></i> </nuxt-link>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
              </div>
         </div>
     </div>
</template>
<script setup>
import blogs from '@/assets/json/blog.json'
import { useBlogStore } from '@/stores/blog';
const blogStore = useBlogStore();
</script>