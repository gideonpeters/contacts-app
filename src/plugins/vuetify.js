import Vue from 'vue';
import 'vuetify/src/stylus/app.styl';
import Vuetify, {
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VContent,
    VContainer,
    VFadeTransition,
    VIcon,
    VSelect,
    VListTile,
} from 'vuetify/lib'
import {
    Ripple
} from 'vuetify/lib/directives';

Vue.use(Vuetify, {
    theme: {
        primary: '#253773',
        secondary: '#424242',
        light: '#f3f3f3',
        accent: '#0b5ecc',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    iconfont: 'mdi',
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VToolbar,
        VContent,
        VContainer,
        VFadeTransition,
        VIcon,
        VSelect,
        VListTile,
    },
    directives: {
        Ripple
    }
})