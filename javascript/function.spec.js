import { dummyFunc, flaky } from "./function";

test('baseline', () => {
        expect(dummyFunc()).toBe(true);
    }
);

test('flaky', () => {
        expect(flaky()).toBe(true);
    }
);