import { test } from "@playwright/test";

test("change language to english", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Neue Angewohnheit").click();
  await page.getByText("Statistik").click();
  await page.locator("#language").selectOption("EN");
  await page.getByText("New Habit").click();
  await page.getByText("Statistic").click();
});
