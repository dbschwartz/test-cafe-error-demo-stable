import { vueRole } from '../roles'
import VueSelector from 'testcafe-vue-selectors';

import { Role, Selector } from 'testcafe';
	fixture `Start`
	.page(`https://dbschwartz.github.io/vue-test/#/`)
	.beforeEach(async t => {
		await t.useRole(vueRole)
	});



test('Vue test 1', async t => {
    await t.click(VueSelector('App').find('#app > div > ul:nth-child(5) > li:nth-child(1) > a'));

});
