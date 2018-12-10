<template>
    <div class="base-item">
        <header class="base-item__header">
            <img :src="characterDetails.image" class="base-item__img">
            <div class="base-item__header-content">
            <h3 class="base-item__title">{{characterDetails.name}}</h3>
            <span class="base-item__subtitle">{{characterDetails.species}} from {{characterDetails.origin.name}}</span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        characterDetails: {
            type: Object
        }
    },
}
</script>
