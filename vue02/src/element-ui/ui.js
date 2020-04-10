import UI from './ui.vue';
import Button from './button.vue';
import Input from './input.vue';
export default [
    {path: '/ui', component: UI, children: [
        {path: 'button', component: Button},
        {path: 'input', component: Input}
    ]}
]