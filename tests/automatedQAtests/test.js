import { Role, Selector } from 'testcafe';

const registeredUser = Role(`http://toolsqa.com/automation-practice-form/`, async t => {
    await t.
     click(Selector('#content > div.vc_row.wpb_row.vc_row-fluid.dt-default > div > div > div > div.wpb_text_column.wpb_content_element > div > form > fieldset > div:nth-child(8) > a'));
}, { preserveUrl: true });

	fixture `Start`
	.page(`http://toolsqa.com/automation-practice-form/`)
	.beforeEach(async t => {
		await t.useRole(registeredUser)
	});
	
	

test('test 1', async t => {
    await t.useRole(registeredUser);
});