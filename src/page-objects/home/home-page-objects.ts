import { expect, Locator, Page } from '@playwright/test'

export class HomePageObjects {
    readonly page: Page
    readonly logoutButton: Locator
    readonly sideBarMenu: Locator
    readonly unitsMenu: Locator
    readonly leadsMenu: Locator
    readonly forbiddenMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.logoutButton = page.locator(
            '//p[contains(text(),"Logout")]'
        )
        this.forbiddenMessage = page.getByText('Forbidden resource')
        this.sideBarMenu = page.getByTestId(
            'component-lib-navigation-sidebar-menu-wrapper'
        )
        this.unitsMenu = page.locator(
            '//div[@data-testid="component-lib-navigation-sidebar-menu-wrapper"]//p[contains(text(),"Units")]'
        )
        this.leadsMenu = page.locator(
            '//div[@data-testid="component-lib-navigation-sidebar-menu-wrapper"]//p[contains(text(),"Leads")]'
        )
    }

    async clickLogoutButton() {
        await this.logoutButton.click()
    }

    async getSideBarMenu() {
        await expect(this.sideBarMenu).toBeVisible()
    }

    async getUnitsMenu() {
        await expect(this.unitsMenu).toBeVisible()
    }

    async getLeadsMenu() {
        await expect(this.leadsMenu).toBeVisible()
    }

    async getNotVisibleUnitsMenu() {
        await expect(this.unitsMenu).not.toBeVisible()
    }

    async getNotVisibleLeadsMenu() {
        await expect(this.leadsMenu).not.toBeVisible()
    }
}
