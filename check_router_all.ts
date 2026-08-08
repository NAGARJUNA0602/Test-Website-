import * as Router from '@tanstack/react-router';
console.log(Object.keys(Router).filter(k => k.includes('Meta') || k.includes('Head') || k.includes('Script')));
