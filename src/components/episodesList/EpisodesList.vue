<template>
    <div>
        <h1 class="episodes__title">Episodes</h1>

        <div class="episodes__search">
            <!-- search icon -->
            <SearchIcon />
            <input type="text" placeholder="Search" @input="handleSearch($event.target.value)">
        </div>

        <div v-infinite-scroll="loadPage" infinite-scroll-disabled="isDone" infinite-scroll-distance="10">
            <ul class="episodes__list">
                <router-link 
                    v-for="episode in episodes" 
                    :key="episode.id" 
                    :to="{ 
                        name: 'episodeDetails', 
                        params:{ id: episode.id} 
                    }"
                    tag = 'li'>
                
                        <EpisodeListItem :episode="episode" />
                </router-link>
            </ul>
        </div>

        <div v-if="isLoading" class="episodes__loader">
        Loading more
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .episodes {
        &__list {
            li {
                cursor: pointer;
            }
        }
    }
</style>


<script>
import SearchIcon from '@/assets/icon-search.svg'
import EpisodeListItem from '@/components/episodesListItem/EpisodesListItem'
import infiniteScroll from 'vue-infinite-scroll'
import debounce from 'lodash.debounce'
import { mapState } from 'vuex'

export default {
    data() {
        return {
          
        } 
    },

    computed: {
        ...mapState('episodes', ['episodes']),

        isDone() {
            if(this.isLoading || this.isLoaded) {
                return true
            }
        }
        // searchEpisode: {
        //     get() {
        //         return this.searchValue;
        //     },
        //     set(val) {
        //         this.searchValue = val;
        //         search(val)
        //     }
        // }
    },

    components: {
        SearchIcon,
        EpisodeListItem
    },
    created() {
        // this.loadPage()
    },
    methods: {
        async loadPage() {
            return
            this.actualPage += 1;
            this.isLoading = true;
            try {
                const response = await fetch( `http://tiny-rick.tk/api/episode?page=${this.actualPage}&name=${this.searchValue}` )
                    .then( (data) => data.json())
                    .then( (data) => {
                
                    this.episodes = [...this.episodes, ...data.results]
                    this.actualPage == data.info.pages ? this.isLoaded = true : ''
                    this.isLoading = false;
                })
            } catch(err) {
                console.warn(err);
            } 
        },
        handleSearch : debounce(function(val) {
            this.actualPage = 0;
            this.searchValue = val;
            this.episodes = [];
            this.isLoaded = false;
            this.loadPage()
        }, 500)
    },
}
</script>

