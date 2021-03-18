import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin
import { Auth0Plugin } from "./auth";

// Install the authentication plugin
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    }
});


createApp(App).use(router).mount('#app')
