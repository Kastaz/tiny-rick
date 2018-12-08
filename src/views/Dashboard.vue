<template>
  <div>
    <TheHeader />
    <main class="main">
    <!-- content -->
      <EpisodesList />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue';
import EpisodesList from '@/components/episodesList/EpisodesList.vue';

export default {
  name: 'Dashboard',
  components: {
    TheHeader,
    EpisodesList
  }
}
</script>
