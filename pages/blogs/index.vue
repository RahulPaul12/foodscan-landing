<template>
    <!--==============================
            HEADER PART START       
    ===============================-->
    <section class="pt-10 lg:pt-18 my-12 md:my-18 container">
        <div class="max-w-[716px] w-full mx-auto">
                <span class="block w-fit mx-auto mb-4 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title">
                    Blog & Article
                </span>
                <h2 class="mb-4 text-3xl md:text-[40px] leading-tight font-extrabold text-center">
                    <span class="inline text-secondary">Welcome to Our Blog</span>
                </h2>
                <p class="text-base md:text-lg font-normal text-center">
                    Follow our  blog for tips, latest trends, customer success stories, product updates, and more!
                </p>
            </div>
    </section>
    <!--==============================
            HEADER PART START       
    ===============================-->

    <!--==============================
           BLOG PART START       
    ===============================-->
    <section class="container mb-16 md:mb-34">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-12 md:mb-17.5">
            <div v-for="blog in blogs">
                <nuxt-img :src="blog.coverImg" alt="logo" class="w-full mb-4 rounded-3xl"/>
                <p class="text-base font-normal flex justify-between leading-5 mb-4"><span>{{ blog.date }}</span><span>{{ blog.readtime }}</span></p>
                <h5 class="text-lg md:text-[26px] font-bold mb-2.5 md:mb-4">{{ blog.title }}</h5>
                <nuxt-link :to="`/blogs/${blog.id}`" @click ="blogStore.setBlog(blog)" class="text-lg font-bold text-primary">Read Blog <i class="ms-2 lab-line-arrow-right-2"></i> </nuxt-link>
            </div>
        </div>
        <vue-awesome-paginate :total-items="50" :items-per-page="5" :max-pages-shown="5" v-model="currentPage" @click="onClickHandler"/>
    </section>
    <!--==============================
           BLOG PART END       
    ===============================-->
</template>

<script setup>
import { ref } from "vue";
import blogs from '@/assets/json/blog.json'
import { useBlogStore } from '@/stores/blog';
const blogStore = useBlogStore();
useHead({
    title:"Blog"
})
const currentPage = ref(1);
const onClickHandler = (page) => {
    console.log(page);
};
</script>
