
const { Builder, Capabilities, By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
   await (await driver).get('http://localhost:3000/')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBeTruthy();
    await driver.sleep(3000);
});

test('does it click?', async () => {
    const seeTheTimmys = await driver.findElement(By.id('see-all'))
    const timmyClick = await seeTheTimmys.click()
    // i don't need to re reference timmyclick bc i just want it to click then check if it displayed the bots 
    const timsABot = await driver.findElement(By.id('all-bots'))
    const timDisplayed = await timsABot.isDisplayed()
    expect(timDisplayed).toBeTruthy();
    await driver.sleep(3000);
});

test('not quite sure yet', async () => {
    const draw = await driver.findElement(By.id('draw')).click()
    const options = await driver.findElement(By.id('choices'))
    const bots = await options.isDisplayed()
    expect(bots).toBe(true)
    await driver.sleep(3000);

})
