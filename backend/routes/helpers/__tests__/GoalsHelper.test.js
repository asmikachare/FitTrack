const { calCalorie, calProtein, calFiber } = require('../GoalsHelper');

describe('calCalorie (Mifflin-St Jeor)', () => {
    test('calculates BMR for a male', () => {
        // (10*80) + (6.25*175) - (5*30) + 5 = 800 + 1093.75 - 150 + 5 = 1748.75 → 1749
        expect(calCalorie({ weight: 80, height: 175, age: 30, is_male: true })).toBe(1749);
    });

    test('calculates BMR for a female', () => {
        // (10*60) + (6.25*165) - (5*25) - 161 = 600 + 1031.25 - 125 - 161 = 1345.25 → 1345
        expect(calCalorie({ weight: 60, height: 165, age: 25, is_male: false })).toBe(1345);
    });

    test('returns an integer', () => {
        const result = calCalorie({ weight: 70, height: 170, age: 28, is_male: true });
        expect(Number.isInteger(result)).toBe(true);
    });

    test('male BMR is always higher than female BMR for same stats', () => {
        const stats = { weight: 70, height: 170, age: 30 };
        expect(calCalorie({ ...stats, is_male: true })).toBeGreaterThan(
            calCalorie({ ...stats, is_male: false })
        );
    });
});

describe('calProtein', () => {
    test('returns weight * 0.8 rounded for 80 kg', () => {
        expect(calProtein({ weight: 80 })).toBe(64);
    });

    test('returns weight * 0.8 rounded for 75 kg', () => {
        expect(calProtein({ weight: 75 })).toBe(60);
    });

    test('rounds fractional results to nearest integer', () => {
        // 73 * 0.8 = 58.4 → 58
        expect(calProtein({ weight: 73 })).toBe(58);
    });
});

describe('calFiber', () => {
    test('returns 38g for males', () => {
        expect(calFiber({ is_male: true })).toBe(38);
    });

    test('returns 25g for females', () => {
        expect(calFiber({ is_male: false })).toBe(25);
    });
});
