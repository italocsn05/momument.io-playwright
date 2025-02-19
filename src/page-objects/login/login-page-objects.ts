import { Locator, Page } from '@playwright/test'

export class LoginPageObjects {
    readonly page: Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly signInButton: Locator

    constructor(page: Page) {
        this.page = page
        this.emailInput = page.getByTestId('email-input')
        this.passwordInput = page.getByTestId('password-input')
        this.signInButton = page.locator('//button[contains(text(),"Sign In")]')
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email)
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password)
    }

    async clickSignInButton() {
        await this.signInButton.click()
    }

    async login(email: string, password: string) {
        await this.fillEmail(email)
        await this.fillPassword(password)
        await this.clickSignInButton()
    }
}
