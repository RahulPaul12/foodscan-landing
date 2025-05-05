<template>

        <!--==============================
             BANNER PART START       
        ===============================-->
        <section class="pt-10 lg:pt-19 mt-12 md:mt-18 container">
            <div class="max-w-[716px] w-full mx-auto mb-12">
                <span class="block w-fit mx-auto mb-4 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title">
                    About Us
                </span>
                <h2 class="mb-4 text-3xl md:text-[40px] leading-tight font-extrabold text-center">
                    <span class="inline text-secondary">Revolutionizing Dining with Seamless</span>
                    <span class="inline text-primary"> QR Code Ordering</span>
                </h2>
                <p class="text-base md:text-lg font-normal text-center">
                    At FoodScan, we believe that dining should be effortless, efficient, and enjoyable for both customers and restaurant owners. Our cutting-edge QR Code Table Ordering System transforms traditional dining by eliminating wait times, enhancing order accuracy, and streamlining restaurant operations.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-3 md:gap-6 items-stretch mb mb-16 md:mb-34">
                <div class="max-w-[531px] rounded-lg md:rounded-3xl">
                    <nuxt-img class="w-full h-full rounded-lg md:rounded-3xl" src="/images/about/banner1.png" alt="banner"/>
                </div>
                <div class="flex flex-col gap-3 md:gap-6">
                    <div class="flex-1 rounded-lg md:rounded-3xl">
                        <nuxt-img class="w-full h-full rounded-lg md:rounded-3xl" src="/images/about/banner2.png" alt="banner"/>
                    </div>
                    <div class="flex-1 rounded-lg md:rounded-3xl">
                        <nuxt-img class="w-full h-full rounded-lg md:rounded-3xl" src="/images/about/banner3.png" alt="banner"/>
                    </div>
                </div>
            </div>
        </section>
        <!--==============================
             BANNER PART END       
        ===============================-->

        <!--==============================
             OUR STORY PART START       
        ===============================-->
        <section class="container">
            <div class="grid grid-cols-1 md:grid-cols-2  gap-6.5  items-center mb mb-16 md:mb-34">
                <div>
                    <h2 class="text-3xl md:text-[40px] font-extrabold mb-6">Our Story</h2>
                    <p class="text-base md:text-lg font-normal flex flex-col gap-6">
                        <span>At FoodScan, our journey began with a simple idea—to make dining more seamless and efficient for both restaurants and customers. We noticed a common challenge in the hospitality industry: long wait times, order miscommunication, and inefficiencies that slowed down service. That’s when we set out to build a solution that would redefine the dining experience.</span>
                        <span>
                            We combined technology with hospitality to create a smart, contactless QR code ordering system that empowers restaurants to operate smoothly while giving customers the convenience they crave. From small cafés to large restaurant chains, our platform is designed to enhance service, boost revenue, and streamline operations—all with just a simple scan.
                        </span>
                    </p>
                </div>
                <nuxt-img class="max-w-[462px] w-full mx-auto md:ml-auto" src="/images/about/our-story.png" alt="banner"/>
            </div>
        </section>
        <!--==============================
             OUR STORY PART END       
        ===============================-->

        <!--==============================
             OUR MISSION PART START       
        ===============================-->
        <section class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6.5 items-center mb mb-16 md:mb-34">
                <nuxt-img class="max-w-[462px] w-full mx-auto md:mr-auto order-2 md:order-1" src="/images/about/our-mission.png" alt="banner"/>
                <div class="order-1 md:order-2">
                    <h2 class="text-3xl md:text-[40px] font-extrabold mb-6">Our Mission</h2>
                    <p class="text-base md:text-lg font-normal flex flex-col gap-6">
                        <span>At FoodScan, our mission is simple: to revolutionize the dining experience through seamless, contactless technology. We empower restaurants with smart QR code ordering solutions that enhance efficiency, reduce wait times, and improve customer satisfaction.</span>
                        <span>
                            We strive to bridge the gap between convenience and hospitality, helping restaurants of all sizes streamline operations, boost revenue, and deliver exceptional service—all while providing customers with a fast, effortless, and enjoyable way to order.
                        </span>
                    </p>
                </div>
            </div>
        </section>
        <!--==============================
             OUR MISSION PART END       
        ===============================-->

        <!--==============================
             SUCCESS STORY PART START       
        ===============================-->
        <div class="py-12 sm:py-17.5 bg-[url(/images/bg/success-story.png)] bg-no-repeat bg-cover">
            <div class="container text-white">
                <h2 class="text-3xl md:text-[40px] font-extrabold mb-12 md:mb-17.5 text-center">Our Proven Success Stories</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-between gap-6">
                    <div class="flex flex-col gap-2.5 md:gap-4 items-center sm:items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M31 15C31 18.866 27.866 22 24 22C20.134 22 17 18.866 17 15C17 11.134 20.134 8 24 8C27.866 8 31 11.134 31 15Z" fill="white"/>
                        <path opacity="0.4" d="M39 15C39 17.7614 36.7614 20 34 20C31.2386 20 29 17.7614 29 15C29 12.2386 31.2386 10 34 10C36.7614 10 39 12.2386 39 15Z" fill="white"/>
                        <path opacity="0.4" d="M9 15C9 17.7614 11.2386 20 14 20C16.7614 20 19 17.7614 19 15C19 12.2386 16.7614 10 14 10C11.2386 10 9 12.2386 9 15Z" fill="white"/>
                        <path d="M36 33C36 36.866 30.6274 40 24 40C17.3726 40 12 36.866 12 33C12 29.134 17.3726 26 24 26C30.6274 26 36 29.134 36 33Z" fill="white"/>
                        <path opacity="0.4" d="M44 33C44 35.7614 40.4183 38 36 38C31.5817 38 28 35.7614 28 33C28 30.2386 31.5817 28 36 28C40.4183 28 44 30.2386 44 33Z" fill="white"/>
                        <path opacity="0.4" d="M4 33C4 35.7614 7.58172 38 12 38C16.4183 38 20 35.7614 20 33C20 30.2386 16.4183 28 12 28C7.58172 28 4 30.2386 4 33Z" fill="white"/>
                        </svg>
                        <h6 class="text-3xl md:text-[40px] font-extrabold">{{employee}}+</h6>
                        <p class="text-lg font-normal text-center sm:text-start">Employees who are committed to your success</p>
                    </div>
                    <div class="flex flex-col gap-2.5 md:gap-4 items-center sm:items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M29 43.9826V37C29 35.1308 29 34.1962 28.5981 33.5C28.3348 33.0439 27.9561 32.6652 27.5 32.4019C26.8039 32 25.8692 32 24 32C22.1308 32 21.1961 32 20.5 32.4019C20.0439 32.6652 19.6652 33.0439 19.4019 33.5C19 34.1962 19 35.1308 19 37V43.9826H29Z" fill="white"/>
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M11.4641 23.9999C9.68252 23.9999 8.10647 23.2478 7 22.0658V28C7 35.5425 7 39.3137 9.34315 41.6568C11.2293 43.543 14.0409 43.9109 19 43.9826H29C33.9591 43.9109 36.7707 43.543 38.6569 41.6568C41 39.3137 41 35.5425 41 28V22.0679C39.8936 23.2487 38.3184 23.9999 36.5379 23.9999C33.3947 23.9999 30.7628 21.6181 30.45 18.4905L30.304 17.0347C30.677 20.7639 27.7484 23.9999 24.0006 23.9999C20.278 23.9999 17.3638 20.8075 17.69 17.1102L17.552 18.4905C17.2392 21.6181 14.6073 23.9999 11.4641 23.9999ZM29 37V43.9826H19V37C19 35.1308 19 34.1962 19.4019 33.5C19.6652 33.0439 20.0439 32.6652 20.5 32.4019C21.1961 32 22.1308 32 24 32C25.8692 32 26.8039 32 27.5 32.4019C27.9561 32.6652 28.3348 33.0439 28.5981 33.5C29 34.1962 29 35.1308 29 37Z" fill="white"/>
                        <path d="M18.9996 4H28.9996L30.3031 17.0347C30.676 20.764 27.7475 24 23.9996 24C20.2517 24 17.3232 20.764 17.6961 17.0347L18.9996 4Z" fill="white"/>
                        <path opacity="0.7" d="M6.65951 10.7027C7.01567 8.92186 7.19374 8.03147 7.55582 7.30968C8.31877 5.78879 9.69158 4.66335 11.3326 4.21349C12.1113 4 13.0194 4 14.8354 4H19L17.551 18.4905C17.2382 21.6182 14.6064 24 11.4631 24C7.6022 24 4.70648 20.4678 5.46366 16.6819L6.65951 10.7027Z" fill="white"/>
                        <path opacity="0.7" d="M41.3405 10.7027C40.9844 8.92186 40.8063 8.03147 40.4442 7.30968C39.6813 5.78879 38.3085 4.66335 36.6675 4.21349C35.8887 4 34.9807 4 33.1646 4H29L30.4491 18.4905C30.7618 21.6182 33.3937 24 36.5369 24C40.3978 24 43.2936 20.4678 42.5364 16.6819L41.3405 10.7027Z" fill="white"/>
                        </svg>
                        <h6 class="text-3xl md:text-[40px] font-extrabold">{{platform}}+</h6>
                        <p class="text-lg font-normal text-center sm:text-start">Businesses on our platform globally</p>
                    </div>
                    <div class="flex flex-col gap-2.5 md:gap-4 items-center sm:items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M20.5541 33.0301C20.5634 32.8104 20.9274 32.7231 21.0353 32.9147C21.5419 33.8141 22.4062 35.1368 23.3869 35.7383C24.3677 36.3397 25.9385 36.5103 26.9698 36.5541C27.1895 36.5634 27.2768 36.9274 27.0852 37.0353C26.1858 37.5419 24.8631 38.4062 24.2616 39.3869C23.6602 40.3677 23.4896 41.9385 23.4458 42.9698C23.4365 43.1895 23.0725 43.2768 22.9646 43.0852C22.458 42.1858 21.5937 40.8631 20.613 40.2616C19.6323 39.6602 18.0614 39.4896 17.0301 39.4458C16.8104 39.4365 16.7231 39.0725 16.9147 38.9646C17.8141 38.458 19.1368 37.5937 19.7383 36.613C20.3397 35.6323 20.5103 34.0614 20.5541 33.0301Z" fill="white"/>
                        <path opacity="0.5" d="M36.9842 31.03C36.9673 30.8108 36.5836 30.7188 36.4691 30.9065C36.1245 31.4716 35.6276 32.1535 35.0752 32.4922C34.5229 32.8309 33.6898 32.9647 33.0299 33.0156C32.8107 33.0326 32.7187 33.4163 32.9064 33.5308C33.4714 33.8754 34.1534 34.3723 34.4921 34.9247C34.8308 35.477 34.9646 36.3101 35.0155 36.97C35.0324 37.1892 35.4161 37.2812 35.5306 37.0935C35.8752 36.5284 36.3722 35.8465 36.9245 35.5078C37.4769 35.1691 38.31 35.0353 38.9698 34.9844C39.1891 34.9674 39.2811 34.5837 39.0933 34.4692C38.5283 34.1246 37.8464 33.6277 37.5077 33.0753C37.1689 32.523 37.0352 31.6899 36.9842 31.03Z" fill="white"/>
                        <path d="M29.4073 8.00362L28.9227 7.39147C27.0494 5.02532 26.1128 3.84225 25.0231 4.0169C23.9334 4.19154 23.4124 5.60825 22.3703 8.44166L22.1007 9.1747C21.8045 9.97986 21.6565 10.3824 21.3725 10.6779C21.0885 10.9734 20.7008 11.1283 19.9253 11.4382L19.2193 11.7203L18.7236 11.9187C16.3246 12.8812 15.1157 13.4266 14.9614 14.4865C14.7967 15.617 15.9409 16.5841 18.2294 18.5183L18.8214 19.0187C19.4717 19.5683 19.7968 19.8432 19.9832 20.2177C20.1696 20.5923 20.1962 21.0243 20.2492 21.8882L20.2975 22.6747C20.4843 25.7147 20.5777 27.2348 21.5656 27.7588C22.5535 28.2829 23.7817 27.4639 26.2381 25.8259L26.2381 25.8259L26.8736 25.4021C27.5717 24.9366 27.9207 24.7039 28.3199 24.6399C28.719 24.5759 29.1232 24.688 29.9314 24.912L30.6673 25.116C33.5116 25.9044 34.9337 26.2986 35.7089 25.492C36.4841 24.6854 36.099 23.2121 35.3288 20.2656L35.1295 19.5033C34.9106 18.6659 34.8011 18.2473 34.8615 17.8331C34.9218 17.419 35.145 17.0563 35.5914 16.3309L35.5915 16.3309L35.9979 15.6704C37.5691 13.1177 38.3546 11.8413 37.8458 10.8187C37.337 9.79612 35.8707 9.70459 32.9383 9.52153L32.1796 9.47417C31.3463 9.42215 30.9296 9.39614 30.5677 9.20417C30.2058 9.0122 29.9397 8.67601 29.4074 8.00363L29.4073 8.00362Z" fill="white"/>
                        <path opacity="0.5" d="M17.67 26.6526C13.3954 28.7409 9.83862 32.0485 8.49687 36.0009C6.99177 26.5857 9.07952 20.5058 12.4262 16.7271C12.7146 17.3165 13.0893 17.8045 13.4259 18.1859C14.1257 18.9787 15.1304 19.8274 16.1505 20.6892L16.8845 21.3096C17.0237 21.4272 17.1319 21.5188 17.2239 21.5982C17.2333 21.7269 17.2426 21.8771 17.2545 22.0718L17.3142 23.0428C17.3943 24.3527 17.4726 25.6316 17.67 26.6526Z" fill="white"/>
                        </svg>
                        <h6 class="text-3xl md:text-[40px] font-extrabold">{{review}}%</h6>
                        <p class="text-lg font-normal text-center sm:text-start">Positive review from clients around the world</p>
                    </div>
                    <div class="flex flex-col gap-2.5 md:gap-4 items-center sm:items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle opacity="0.5" cx="24" cy="24" r="20" fill="white"/>
                        <path d="M17.1503 18.8947C16.7758 14.7263 13.5612 10.8421 12.0007 9.42105L11.1387 8.68379C14.6158 5.76073 19.1027 4 24.0007 4C28.4275 4 32.5183 5.43821 35.8315 7.87285C36.2997 9.2939 35.408 12.2632 34.4717 13.6842C34.1326 14.1989 33.3635 14.838 32.5204 15.4437C30.6195 16.8095 28.2205 17.4851 27.0007 20C26.652 20.7189 26.6669 21.4217 26.8346 22.0325C26.9552 22.4717 27.0323 22.9491 27.0335 23.4159C27.0374 24.9258 25.5105 26.0165 24.0007 26C20.0721 25.9571 17.5004 22.7911 17.1503 18.8947Z" fill="white"/>
                        <path d="M26.8729 36.5521C28.8491 32.828 35.4365 32.828 35.4365 32.828C42.3004 32.7564 43.2276 28.5889 43.8475 26.4824C42.7381 35.4451 35.6988 42.5698 26.777 43.8091C26.1318 42.4512 25.3675 39.3891 26.8729 36.5521Z" fill="white"/>
                        </svg>
                        <h6 class="text-3xl md:text-[40px] font-extrabold">{{countries}}+</h6>
                        <p class="text-lg font-normal text-center sm:text-start">Countries we served all over the world</p>
                    </div>
                </div>
            </div>
        </div>
        <!--==============================
             SUCCESS STORY PART END       
        ===============================-->

        <!--==============================
             REVIEW PART START       
        ===============================-->
        <ReviewComponent/>
        <!--==============================
             SUCCESS STORY PART END       
        ===============================-->

        <!--==============================
             REVIEW PART START       
        ===============================-->
        <FaqComponent/>
        <!--==============================
             SUCCESS STORY PART END       
        ===============================-->

</template>
<script setup>
    useHead({
        title:"About us"
    })
const {counter : employee} = useCounter(200, 20)
const {counter : platform} = useCounter(2500, 0.1)
const {counter : review} = useCounter(98,20)
const {counter : countries} = useCounter(15, 40)
    
</script>