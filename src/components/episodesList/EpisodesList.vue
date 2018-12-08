<template>
    <div>
        <h1 class="episodes__title">Episodes</h1>

        <div class="episodes__search">
            <!-- search icon -->
            <SearchIcon />
            <input type="text" placeholder="Search">
        </div>

        <ul class="episodes__list">
            <li v-for="episode in episodes" :key="episode.id" >
                <!-- Episode Item -->
                <EpisodeListItem :episode="episode" />
            </li>
            <!-- ... -->
        </ul>

        <div v-if="isLoading" class="episodes__loader">
        Loading more
        </div>
    </div>
</template>

<script>
import SearchIcon from '@/assets/icon-search.svg'
import EpisodeListItem from '@/components/episodesListItem/EpisodesListItem'

export default {
    data() {
        return {
            isLoading : false,
            episodes: [],
            page: 1
        } 
    },
    components: {
        SearchIcon,
        EpisodeListItem
    },
    created() {
        fetch('http://tiny-rick.tk/api/episode/')
            .then( (data) => data.json())
            .then( (data) => {
                this.episodes = data.results
                console.log(data.results);
            })
    },
    methods: {
        
    }
}
</script>

