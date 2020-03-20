<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <!-- Hamburger menu button, currently not used. might use when there will be more pages -->
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title>
          Tally Bear
        </q-toolbar-title>

        <div><img src="statics/icons/favicon-32x32.png"/></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Monitor',
          caption: 'Tally monitor',
          icon: 'school',
          link: '/'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: '/settings'
        }
      ]
    }
  }
}
</script>
