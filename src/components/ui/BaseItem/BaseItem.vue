<template>
    <div class="base-item">
        <header class="base-item__header">
            <img 
                v-if="img"
                data-test="img"
                class="base-item__img"
                :src="img" 
                >
            <div class="base-item__header-content">
            <h3 
                class="base-item__title"
                data-test="title">
                {{title}}
            </h3>

            <span 
                class="base-item__subtitle"
                data-test="subtitle">
                {{subtitle}}
            </span>
            </div>

            <div
                data-test="content">
                <slot />
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        img: {
            type: String,
            default: null
        }
    }
}
</script>


