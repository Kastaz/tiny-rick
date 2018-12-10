<template>
    <section class="comments">
        <form class="comments__form"
            @submit.prevent="submitComment">
            <textarea placeholder="Your comment here" v-model="content"></textarea>
            <div class="comments__bar">
            <input type="text" placeholder="Username" v-model="author">
            <button type="submit">
                <!-- Plus Icon -->
                <AddIcon />
            </button>
            </div>
        </form>
    </section>
</template>

<script>
import AddIcon from '@/assets/icon-add.svg';

export default {
    data() {
        return {
            content: '',
            author: '',
        }
    },
    components: {
        AddIcon
    },
    props: {
        id: {
          type: [String, Number]
        }
    },
    methods: {
        submitComment() {
            this.$emit('submitComment', this.content, this.author);
            this.content = '';
            this.author = '';
        }
    }    
}
</script>

