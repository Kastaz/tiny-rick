<template>
    <div>
        <h1 class="episodes__title">Episodes</h1>

        <div class="episodes__search">
            <!-- search icon -->
            
            <input type="text" placeholder="Search">
        </div>

        <ul class="episodes__list">
            <li>
                <!-- Episode Item -->
            </li>
            <!-- ... -->
        </ul>

        <div v-if="isLoading" class="episodes__loader">
        Loading more
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading : false
        } 
    }
}
</script>

