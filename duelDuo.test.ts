
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
})

test('adds one to winners or lossers', async () => {
    
    await driver.sleep(3000);
})