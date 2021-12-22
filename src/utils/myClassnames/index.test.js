import { myClassnames } from './index';

it('returns empty string if no args passed', () => {
  expect(myClassnames()).toBe('');
});
it('should accept object as arg', () => {
  expect(myClassnames('class1', { class2: true })).toBe('class1 class2');
});
it('should accept array as arg', () => {
  expect(myClassnames(['class1', 'class2'])).toBe('class1 class2');
});
it('concats strings with space', () => {
  expect(myClassnames('class1', 'class2')).toBe('class1 class2');
});
it('ignores empty strings', () => {
  expect(myClassnames('class1', '')).toBe('class1');
});
