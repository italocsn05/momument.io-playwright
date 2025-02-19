import { test, expect } from '@playwright/test'
import { LoginPageObjects } from '../../page-objects/login/login-page-objects'
import { HomePageObjects } from '../../page-objects/home/home-page-objects'

test.describe("Access Control", () => {
    let loginPageObjects: LoginPageObjects
    let homePageObjects: HomePageObjects

    test.beforeEach(async ({ page }) => {
        const username = process.env.AUTOMATION_USER || ''
        const password = process.env.AUTOMATION_PASSWORD || ''
        
        loginPageObjects = new LoginPageObjects(page)
        homePageObjects = new HomePageObjects(page)
        await page.goto('/')
        await loginPageObjects.login(username, password)
    })

    test('User with Leads access cannot access Units and sees an error message', async ({ page }) => {
        await homePageObjects.getNotVisibleUnitsMenu()
        await homePageObjects.getLeadsMenu()
        await page.goto('/units')
        await expect(page.getByText('You don’t have permissions to view this page')).toBeVisible()
        await expect(page.getByText('Reach out to administrator to get access to this page.')).toBeVisible()

    })
})