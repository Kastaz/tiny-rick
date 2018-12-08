<template>
    <div>
        <h1>Episode</h1>

        <a href="/" class="go-back-link">
            <!-- arrow icon -->
            <ArrowIcon />
            Search results
        </a>

        <div class="episode__content">

            <div class="episode__left-col">
                <!-- Episode Item with extra info -->
                <EpisodesListItem :episode="episode" :hasExtra = true />
                <h2>Characters</h2>

                <div class="characters-list">
                    <!-- Character Items -->
                
                <div class="link-container">
                    <button class="primary-link is-big">
                    Show more
                    </button>
                </div>
                </div>
            </div>

            <div class="episode__right-col">
            <h2>Comments</h2>
            <!-- Comments -->
                <EpisodeDetailsComments />    
            </div>
        </div>
    </div>
</template>


<script>
import ArrowIcon from '@/assets/icon-arrow-left.svg'
import EpisodesListItem from '@/components/episodesListItem/EpisodesListItem.vue'
import EpisodeDetailsComments from '@/components/episodeDetailsComments/EpisodeDetailsComments.vue'

export default {
    data() {
        return {
            episode: {}
        }
    },
    components: {
        ArrowIcon,
        EpisodesListItem,
        EpisodeDetailsComments
    },
    props: {
        id: {
            type: String
        }
    },
    created() {
        this.getEpisode();
    },
    methods: {
        getEpisode() {
            try {
                console.log(this.id)
                const response = fetch(`http://tiny-rick.tk/api/episode/${this.id}`)
                    .then( (data) => data.json())
                    .then( (data) => {
                        console.log(data.results);
                    })
            }  catch(err) {
                console.log(err);
            }
        }
    }
    
}
</script>
