import {
    Role
} from 'testcafe';

export const testCafeRole = Role(`http://toolsqa.com/automation-practice-form/`, async t => {
    await t.navigateTo('http://devexpress.github.io/testcafe/example/')
}, {
    preserveUrl: true
});


export const vueRole = Role(`http://devexpress.github.io/testcafe/example/`, async t => {
    await t.navigateTo('http://devexpress.github.io/testcafe/example/')
}, {
    preserveUrl: true
});
