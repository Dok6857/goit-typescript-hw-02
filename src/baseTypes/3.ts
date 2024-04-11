let some:unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = <string>some;
    str = some as string; 
    str = typeof some; 

}

export {};