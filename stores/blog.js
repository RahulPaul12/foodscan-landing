import { defineStore } from "pinia";

export const useBlogStore = defineStore('blog', {
    persist: true,
    state: ()=>({
        id : null,
        title: "",
        date : "",
        readtime : "",
        coverImg : ""
    }),
    actions:{
        setBlog: function(blog){
            this.id = blog.id;
            this.title = blog.title;
            this.date = blog.date;
            this.readtime = blog.readtime;
            this.coverImg = blog.coverImg

        }
    }
})