import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ProcessCenter from '@/components/ProcessCenter/ProcessCenter';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/process',
            name: 'ProcessCenter',
            component: ProcessCenter
        }, {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
});
