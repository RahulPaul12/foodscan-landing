<template>
    <div :class="isOpen ? 'active': ''" class="backdrop lg:hidden"></div>
    <!--==============================
          HEADER PART START 
   ===============================-->
    <header class="fixed top-0 lg:z-[50] shadow-header bg-white/80 left-0 w-full py-3">
        <div class="container">
            <div class="flex lg:hidden items-start justify-between gap-2 py-1">
                <nuxt-link to="/">
                    <nuxt-img 
                        src="/images/logo/dark.png" 
                        alt="logo" 
                        class="w-36 lg:w-52" 
                    />
                </nuxt-link>
                <button @click="isOpen = true" type="button" class="leading-none text-secondary">
                    <i class="lab-line-humburger text-xl leading-none"></i>
                </button>
            </div>
            <div class="hidden lg:flex justify-between items-center">
                <nuxt-link to="#">
                    <nuxt-img 
                        src="/images/logo/dark.png" 
                        alt="logo" 
                        class="w-36 lg:w-52" 
                    />
                </nuxt-link>
                <nav  class="flex max-lg:flex-col lg:items-center justify-center gap-6 text-secondary">
                    <nuxt-link to="/" class="text-lg font-medium capitalize">Home</nuxt-link>
                    <nuxt-link to="/pricing-details" class="text-lg font-medium capitalize">Pricing</nuxt-link>
                    <nuxt-link to="/blogs" class="text-lg font-medium capitalize">Blogs</nuxt-link>
                    <nuxt-link to="/about-us" class="text-lg font-medium capitalize">About</nuxt-link>
                    <nuxt-link to="/contact-us" class="text-lg font-medium capitalize">Contact Us</nuxt-link>
                </nav>
                <button type="button" class="flex-shrink-0 h-10 lg:h-12 max-lg:w-fit px-4 rounded-lg whitespace-nowrap text-base lg:text-lg font-medium bg-linear-to-br from-primary to-[#72A9FF] shadow-headerBtn text-white">
                    Start Free Trial
                </button>
            </div>
        </div>
    </header>
    <!--==============================
            HEADER PART START       
    ===============================-->

    <!--==============================
         SIDEBAR PART START             
    ===============================-->
    <aside :class="isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'" class="relative lg:hidden transition-all duration-300 
                     max-lg:fixed max-lg:top-0 max-lg:left-0 z-[50] max-lg:p-5 
                    max-lg:w-full max-lg:max-w-xs max-lg:h-dvh max-lg:shadow-sidebar max-lg:overflow-y-auto max-lg:bg-white">
         <div class="flex lg:hidden items-start justify-between gap-2 mb-4 pb-4 border-b border-[#dbd9eb]">
                    <nuxt-link to="#">
                        <nuxt-img 
                            src="/images/logo/dark.png" 
                            alt="logo" 
                            class="w-36 lg:w-52" 
                        />
                    </nuxt-link>
                    <button @click="isOpen = false" type="button" class="leading-none block lg:hidden">
                        <i class="lab-line-circle-cross leading-none text-danger"></i>
                    </button>
         </div>
         <nav :class="isSticky ? 'text-heading' : 'lg:text-white'" class="flex flex-col justify-center gap-6">
                    <nuxt-link to="/" class="text-lg font-medium capitalize">Home</nuxt-link>
                    <nuxt-link to="/pricing-details" class="text-lg font-medium capitalize">Pricing</nuxt-link>
                    <nuxt-link to="/blogs" class="text-lg font-medium capitalize">Blogs</nuxt-link>
                    <nuxt-link to="/about-us" class="text-lg font-medium capitalize">About</nuxt-link>
                    <nuxt-link to="/contact-us" class="text-lg font-medium capitalize">Contact Us</nuxt-link>
            </nav>
            <button type="button" class="absolute bottom-2 max-w-[87%] w-full mx-auto flex-shrink h-10 lg:h-12 rounded-lg whitespace-nowrap text-base lg:text-lg font-medium bg-linear-to-br from-primary to-[#72A9FF] shadow-headerBtn text-white">
        Start Free Trial
    </button>
    </aside>
    <!--==============================
         SIDEBAR PART END       
    ===============================-->

    <NuxtPage />
</template>

<script setup>
const isOpen = ref(false);
</script>