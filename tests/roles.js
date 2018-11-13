import {
    Role
} from 'testcafe';

export const testCafeRole = Role(`http://toolsqa.com/automation-practice-form/`, async t => {
    await t.navigateTo('http://devexpress.github.io/testcafe/example/')
}, {
    preserveUrl: true
});


export const vueRole = Role(`https://dbschwartz.github.io/vue-test`, async t => {
    await t.navigateTo('https://dbschwartz.github.io/vue-test')
}, {
    preserveUrl: true
});
