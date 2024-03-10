import { test, expect } from "@playwright/test";
import { SauceDemoLoginPage } from "../pages/sauceDemoLoginPage";

test('Inicio de sesión', async ({ page }) => {
    const sauceDemoLoginPage = new SauceDemoLoginPage(page);
    await sauceDemoLoginPage.navigateToSauceDemo();
    expect(sauceDemoLoginPage.isVisibleTextTitle).toBeTruthy();
    await sauceDemoLoginPage.fillInputUserName("standard_user");
    await sauceDemoLoginPage.fillInputPassword("secret_sauce");
    await sauceDemoLoginPage.clickButtonLogin();
});