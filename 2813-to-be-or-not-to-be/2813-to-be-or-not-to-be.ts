type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (toBeVal: any) => {
            if (val === toBeVal) {
                return true;
            } else throw new Error('Not Equal')
        },
        notToBe: (notToBeVal: any) => {
            if (val !== notToBeVal) {
                return true;
            } else throw new Error('Equal')
        }
    }
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */