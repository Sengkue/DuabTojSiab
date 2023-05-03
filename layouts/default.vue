<template>
  <v-app :dark="dark">
    <!-- ------------------------------ mobile narbar screen -------------------------->

    <v-app-bar
      v-if="$vuetify.breakpoint.xs"
      fixed
      app
      :color="sun ? 'primary' : ''"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-avatar v-ripple to="/" @click="goHome('/')">
        <v-img src="/images/icon.jpg" width="20" contain></v-img>
      </v-avatar> -->
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        class="ml-1"
        placeholder="search"
        :background-color="sun ? '' : 'white'"
        outlined
        dense
        hide-details="auto"
        append-icon="mdi-magnify"
      >
      </v-text-field>

      <v-spacer />
      <div v-ripple class="text-center px-3 cursor-pointer" @click="setTheme">
        <div>
          <v-icon large>{{
            !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
          }}</v-icon>
        </div>
      </div>
    </v-app-bar>
    <!-- ------------------mobile sidebar menu------------------------- -->
    <v-navigation-drawer
  v-if="$vuetify.breakpoint.xs"
  v-model="drawer"
  fixed
  app
>
  <v-list v-for="(item, i) in items" :key="i" dense class="py-0" tile flat>
    <v-list-group v-if="item.children" :prepend-icon="item.icon" no-action>
      <template #activator>
        <v-list-item-title class="py-2 ml-n5" :style="{ fontSize: '15px' }">
          {{ item.title }}
        </v-list-item-title>
      </template>
      <v-list-item
        v-for="(child, j) in item.children"
        :key="j"
        router
        exact
        active-class="blue-grey lighten-4"
      >
      <!-- target="_blank" -->
        <a
          :href="child.to"
          
          class="d-flex align-center"
          style="text-decoration: none; color: inherit;"
        >
          <v-list-item-action class="ml-n6">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title class="ml-n6" :style="{ fontSize: '15px' }">
            {{ child.title }}
          </v-list-item-title>
        </a>
      </v-list-item>
    </v-list-group>
    <v-list-item
      v-else
      :to="item.to"
      router
      exact
      dense
      active-class="blue-grey lighten-4"
    >
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content class="ml-n5">
        <v-list-item-title class="py-2" :style="{ fontWeight: 'bold', fontSize: '15px' }">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

    <!-- ----------------------------- mobile footer screen ------------------------------------- -->
    <v-footer
      v-if="$vuetify.breakpoint.xs"
      fixed
      app
      :color="sun ? 'primary' : ''"
    >
      <v-container class="d-flex align-center justify-space-between ma-0 pa-2">
        <div
          class="text-center px-0 cursor-pointer"
          @click="goHome('/')"
        >
          <div><v-icon v-ripple large>mdi-home</v-icon></div>
        </div>
        <div  class="text-center no-click-effect" @click="post('/post')">
          <div elevation="0">
            <v-avatar v-ripple class="mt-n9 pt-n9 box2 green" elevation="8"
              ><v-img
                src="/images/icon.png"
                max-width="60"
                max-height="60"
              >
              <v-icon large dark class="mt-2 " >mdi-plus</v-icon>
              </v-img
            ></v-avatar>
          </div>
          <div class="mt-n2 ">Tso Duab</div>
        </div>
        <div
          class="text-center px-0 cursor-pointer"
          @click="goTo('/profiles')"
        >
          <div><v-icon v-ripple class="rounded"  large >mdi-account</v-icon></div>
        </div>
      </v-container>
    </v-footer>

    <!-- ----------------------------- desktop screen nav bar ----------------------------------- -->
    <v-app-bar v-if="!$vuetify.breakpoint.xs" :clipped-left="clipped" fixed app>
      <v-container class="d-flex align-center">
        <v-avatar v-ripple class="mr-2" @click="goHome('/')">
          <v-img src="/images/icon.png" width="15"></v-img>
        </v-avatar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-menu offset-y>
          <template #[`activator`]="{ on }">
            <div class="text-center px-3 cursor-pointer" v-on="on">
              <div v-ripple><v-icon>mdi-home-group-plus</v-icon>CATEGORY</div>
            </div>
          </template>
          <v-list>
            <v-list-item-group active-class="primary">
              <v-list-item @click="goHome('https://duabhmoobtojsiab.com/')">
                <v-list-item-title><v-icon>mdi-domain</v-icon>Duab Toj Saib</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <v-spacer />
        <v-text-field
          v-model="search"
          placeholder="search"
          outlined
          dense
          hide-details="auto"
          @input="$store.commit('product/setSearchValue', $event)"
        >
          <template #append>
            <v-btn text small>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <div
          v-ripple
          class="text-center px-3 cursor-pointer"
          @click="setTheme()"
        >
          <div>
            <v-icon large :color="sun ? 'yellow' : ''">{{
              !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
            }}</v-icon>
          </div>
        </div>
        <div v-ripple class="text-center px-3 cursor-pointer" @click="goProfile('/profiles')">
          <v-icon large>mdi-account-circle</v-icon>
        </div>
      </v-container>
    </v-app-bar>
    <!-- ============= main Nuxt contents ====================== -->
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- ================ end Nuxt contensts ==================== -->
    <!------------------------- desktop footer screeen ------------------------------>
    <v-footer v-if="!$vuetify.breakpoint.xs" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      sun: false,
      dark: false,
      search: '',
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-home-group-plus",
          title: "Category",
          children: [
            {
              icon: "mdi-image-filter-hdr",
              title: "duab toj siab",
              to: "https://duabhmoobtojsiab.com/",
            },
            {
              icon: "mdi-eye",
              title: "duab toj siab",
              to: "/duabDetail",
            },
          ],
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Duab Toj Siab',
    }
  },
  created() {
    this.dark = this.$cookies.get('mode')
    this.$vuetify.theme.dark = this.dark
    this.sun = this.dark
  },
  methods: {
    setTheme() {
      this.sun = !this.sun
      this.dark = this.sun
      if (this.sun === true) {
        this.$vuetify.theme.dark = true
        this.$cookies.set('mode', true)
        return true
      } else {
        this.$vuetify.theme.dark = false
        this.$cookies.set('mode', false)
        return false
      }
    },
    goHome(url) {
      window.open(url, '_blank');
    },
    post(to){
      this.$router.push(to)
    },
    goTo(to) {
      this.$router.push(to)
    },
    goProfile(to) {
      this.$router.push(to)
    },
  },
}
</script>
<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
.no-click-effect {
  // pointer-events: none;
  // user-select: none;
  //   background-color: inherit !important;
  //   color: inherit !important;
  //   box-shadow: none !important;
}
</style>
