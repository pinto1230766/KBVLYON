import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation Tests', () => {
  test.describe('Navbar Burger Menu', () => {
    test('should open and close burger menu on mobile', async ({ page, isMobile }) => {
      test.skip(!isMobile, 'This test is only for mobile devices');

      await page.goto('/');

      // Vérifier que le menu burger est visible sur mobile
      const burgerButton = page.locator('button[aria-label*="Menu"]').first();
      await expect(burgerButton).toBeVisible();

      // Ouvrir le menu
      await burgerButton.click();

      // Vérifier que le menu est ouvert (Sheet content visible)
      const menuContent = page.locator('[role="dialog"], .sheet-content').first();
      await expect(menuContent).toBeVisible();

      // Vérifier que les liens de navigation sont présents
      await expect(page.getByRole('link', { name: /inicio|home/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /dicionario|dictionary/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /licoes|lessons/i })).toBeVisible();

      // Fermer le menu en cliquant sur un lien
      await page.getByRole('link', { name: /dicionario|dictionary/i }).click();

      // Vérifier que le menu est fermé
      await expect(menuContent).not.toBeVisible();

      // Vérifier que nous sommes sur la page dictionnaire
      await expect(page).toHaveURL(/.*dictionary/);
    });
  });

  test.describe('DictionaryPage Search and Favorites', () => {
    test('should search and manage favorites on mobile', async ({ page, isMobile }) => {
      test.skip(!isMobile, 'This test is only for mobile devices');

      await page.goto('/dictionary');

      // Attendre que la page se charge
      await page.waitForLoadState('networkidle');

      // Vérifier que nous sommes sur la page dictionnaire
      await expect(page.getByRole('heading', { name: /dicionario|dictionary/i })).toBeVisible();

      // Effectuer une recherche
      const searchInput = page.getByPlaceholder(/pesquisar|search/i).first();
      await searchInput.fill('amor');
      await searchInput.press('Enter');

      // Attendre les résultats
      await page.waitForTimeout(500);

      // Vérifier qu'il y a des résultats
      const results = page.locator('[data-testid="dictionary-entry"], .bg-card').all();
      expect((await results).length).toBeGreaterThan(0);

      // Ajouter le premier résultat aux favoris
      const firstStarButton = page.locator('button[aria-label*="favorit"]').first();
      await firstStarButton.click();

      // Aller à l'onglet favoris
      await page.getByRole('button', { name: /favoritos|favorites/i }).click();

      // Vérifier que le favori est présent
      await expect(page.locator('text=amor')).toBeVisible();

      // Retirer des favoris
      const favoriteStarButton = page.locator('button[aria-label*="remover|remove"]').first();
      await favoriteStarButton.click();

      // Vérifier que les favoris sont vides
      await expect(page.getByText(/nenhum favorito|no favorites/i)).toBeVisible();
    });
  });

  test.describe('LessonsPage Filters', () => {
    test('should filter lessons by category and level on mobile', async ({ page, isMobile }) => {
      test.skip(!isMobile, 'This test is only for mobile devices');

      await page.goto('/lessons');

      // Attendre que la page se charge
      await page.waitForLoadState('networkidle');

      // Vérifier que nous sommes sur la page leçons
      await expect(page.getByRole('heading', { name: /licoes|lessons/i })).toBeVisible();

      // Compter les leçons initiales
      const initialLessons = await page.locator('[role="button"][aria-labelledby]').count();

      // Appliquer un filtre de catégorie (ex: verbs)
      const verbsFilter = page.getByRole('button', { name: /verbos|verbs/i });
      await verbsFilter.click();

      // Attendre le filtrage
      await page.waitForTimeout(500);

      // Vérifier que le nombre de leçons a changé
      const filteredLessons = await page.locator('[role="button"][aria-labelledby]').count();
      expect(filteredLessons).toBeLessThanOrEqual(initialLessons);

      // Appliquer un filtre de niveau (ex: beginner)
      const beginnerFilter = page.getByRole('button', { name: /iniciante|beginner/i });
      await beginnerFilter.click();

      // Attendre le filtrage
      await page.waitForTimeout(500);

      // Vérifier que le nombre de leçons a encore changé
      const doubleFilteredLessons = await page.locator('[role="button"][aria-labelledby]').count();
      expect(doubleFilteredLessons).toBeLessThanOrEqual(filteredLessons);

      // Réinitialiser les filtres
      const allCategoriesFilter = page.getByRole('button', { name: /todas|all/i }).first();
      await allCategoriesFilter.click();

      const allLevelsFilter = page.getByRole('button', { name: /todos|all.*niveis|levels/i });
      await allLevelsFilter.click();

      // Vérifier que nous avons toutes les leçons
      await page.waitForTimeout(500);
      const finalLessons = await page.locator('[role="button"][aria-labelledby]').count();
      expect(finalLessons).toBe(initialLessons);
    });
  });
});