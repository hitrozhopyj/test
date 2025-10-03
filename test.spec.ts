import { test, expect } from '@playwright/test';

test('Fill and submit the practice form', async ({ page }) => {
  // Navigate to the form page
  await page.goto('https://demoqa.com/automation-practice-form');

  // Fill mandatory fields
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#userEmail', 'john.doe@example.com');
  await page.check('#gender-radio-1'); // Male
  await page.fill('#userNumber', '1234567890');
  await page.click('#dateOfBirthInput'); // Open date picker
  await page.selectOption('.react-datepicker__month-select', '0'); // January
  await page.selectOption('.react-datepicker__year-select', '1990');
  await page.click('.react-datepicker__day--001'); // 1st day

  // Fill optional fields for completeness (as per task to fill all if possible)
  await page.fill('#subjectsInput', 'Maths');
  await page.keyboard.press('Enter'); // Select subject
  await page.check('#hobbies-checkbox-1'); // Sports
  await page.setInputFiles('#uploadPicture', 'path/to/sample/image.jpg'); // Replace with actual path or skip if not mandatory
  await page.fill('#currentAddress', '123 Main St, City, Country');

  // Select state and city
  await page.click('#state');
  await page.getByText('NCR').click();
  await page.click('#city');
  await page.getByText('Delhi').click();

  // Submit the form
  await page.click('#submit');

  // Verify the modal appears with the table
  await expect(page.locator('.modal-content')).toBeVisible();

  // Verify the table headers and values match the input data
  const table = page.locator('.table-responsive table tbody tr');
  await expect(table.filter({ hasText: 'Student Name' })).toContainText('John Doe');
  await expect(table.filter({ hasText: 'Student Email' })).toContainText('john.doe@example.com');
  await expect(table.filter({ hasText: 'Gender' })).toContainText('Male');
  await expect(table.filter({ hasText: 'Mobile' })).toContainText('1234567890');
  await expect(table.filter({ hasText: 'Date of Birth' })).toContainText('01 January,1990');
  await expect(table.filter({ hasText: 'Subjects' })).toContainText('Maths');
  await expect(table.filter({ hasText: 'Hobbies' })).toContainText('Sports');
  await expect(table.filter({ hasText: 'Picture' })).toContainText('image.jpg'); // Adjust based on actual file name
  await expect(table.filter({ hasText: 'Address' })).toContainText('123 Main St, City, Country');
  await expect(table.filter({ hasText: 'State and City' })).toContainText('NCR Delhi');
});
