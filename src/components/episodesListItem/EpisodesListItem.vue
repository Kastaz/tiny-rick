<template>
    <div>
        <div class="episode-item">
            <h3 class="episode-item__num">Episode {{getEpisode}}</h3>
            <h2 class="episode-item__name">{{episode.name}}</h2>
            <span class="episode-item__season-badge">Season {{getSeason}}</span>
        </div>
        <div v-if="hasExtra" class="episode-info">
            <span class="episode-info__label">Air date</span>
            <span class="episode-info__value">December 2, 2013</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getSeason() {
            return Number(this.episode.episode.substring(2,3))
        },
        getEpisode() {
            return Number(this.episode.episode.substring(4,6))
        }
    },
    props: {
        episode: {
            type: Object
        },
        hasExtra: {
            type: Boolean,
            default: false
        }
    }
}
</script>
