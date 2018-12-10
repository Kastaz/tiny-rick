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
                <EpisodesListItem v-if="episode" :episode="episode">
                    <div class="episode-info">
                        <span class="episode-info__label">Air date</span>
                        <span class="episode-info__value">December 2, 2013</span>
                    </div>
                </EpisodesListItem>
                
                <h2>Characters</h2>

                <div class="characters-list">
                    <!-- Character Items -->
                <EpisodeCharacterItem v-for="char in visibleCharacters" :key="char.id" :characterDetails="char">
                </EpisodeCharacterItem>

                <div class="link-container">
                    <button class="primary-link is-big" @click="showAllCharacters = !showAllCharacters">
                    {{ showAllCharacters ? 'Show less' : 'Show more'}}
                    </button>
                </div>
                </div>
            </div>

            <div class="episode__right-col">
            <h2>Comments</h2>
            <!-- Comments -->
                <EpisodeDetailsCommentAdd @submitComment="submitComment" />
                <EpisodeDetailsCommentItem 
                    v-if="comments"
                    v-for="comment in comments" 
                    :key="comment.id" 
                    :comment="comment"
                />
            </div>
        </div>
    </div>
</template>


<script>
import ArrowIcon from '@/assets/icon-arrow-left.svg'
import EpisodesListItem from '@/components/episodesListItem/EpisodesListItem.vue'
import EpisodeDetailsCommentAdd from '@/components/episodeDetailsCommentAdd/EpisodeDetailsCommentAdd.vue'
import EpisodeDetailsCommentItem from '@/components/episodeDetailsCommentItem/EpisodeDetailsCommentItem.vue'
import EpisodeCharacterItem from '@/components/episodeCharacterItem/EpisodeCharacterItem.vue'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            episode: null,
            // characters: [],
            showAllCharacters: false,
            comments: null,
        }
    },
    components: {
        ArrowIcon,
        EpisodesListItem,
        EpisodeDetailsCommentAdd,
        EpisodeDetailsCommentItem,
        EpisodeCharacterItem
    },
    props: {
        id: {
            type: [String, Number]
        }
    },
    computed: {
        ...mapState('characters', ['characters']),
        visibleCharacters: function() {
            if (this.showAllCharacters) {
                return this.characters
            }
            return this.characters.slice(0, 5);
        }
    },
    created() {
        this.getEpisode();
    },
    methods: {
        getEpisode() {
            try {
                const response = fetch(`http://tiny-rick.tk/api/episode/${this.id}`)
                    .then( (data) => data.json())
                    .then( (data) => {
                        this.episode = data;
                        this.getCharacters();
                        this.getComments();
                    })
            }  catch(err) {
                console.log(err);
            }
        },
        async getCharacters() {
            return
            const charId = this.episode.characters.map( function( character ){
                return character.replace('https://rickandmortyapi.com/api/character/', '');
            });
            
            try {
                const response = await fetch(`http://tiny-rick.tk/api/character/${charId}`)
                    .then( (data) => data.json())
                    .then( (data) => {
                        this.characters = data;
                    })
            }  catch(err) {
                console.log(err);
            }
        },
        async getComments() {
            try {
                const response = await fetch(`http://tiny-rick.tk/api/episode/${this.id}/comments`)
                 .then( (data) => data.json())
                    .then( (data) => {
                        this.comments = data.results;
                    })
            }  catch(err) {
                console.log(err);
            }
        },
        submitComment(content, author) {
            axios({
                method: 'post',
                url: 'http://tiny-rick.tk/api/episode/1/comments',
                data: {
                    content,
                    author
                }
            }).then( (response) => {
                this.comments = [response.data, ...this.comments];
            });
        }
    }
    
}
</script>
