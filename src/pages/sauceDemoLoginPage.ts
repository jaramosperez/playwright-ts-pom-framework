import { Locator, Page } from "@playwright/test";

export class SauceDemoLoginPage {
    // Locators
    private readonly textTitle: Locator;
    private readonly inputUserName: Locator;
    private readonly inputPassword: Locator;
    private readonly buttonLogin: Locator;

    // Constructor
    constructor(public readonly page:Page) {
        this.textTitle = this.page.locator(".login_logo");
        this.inputUserName = this.page.locator('#user-name');
        this.inputPassword = this.page.locator('#password');
        this.buttonLogin = this.page.locator('#login-button');
    }

    // Functions
    async navigateToSauceDemo() {
        await this.page.goto("/");
    }

    async isVisibleTextTitle(){
        await this.textTitle.isVisible();
    }

    async fillInputUserName(userName: string) {
        await this.inputUserName.fill(userName);
    }

    async fillInputPassword(password: string) {
        await this.inputPassword.fill(password);
    }

    async clickButtonLogin() {
        await this.buttonLogin.click();
    }
}