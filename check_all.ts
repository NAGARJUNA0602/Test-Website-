import * as Router from '@tanstack/react-router';
import * as Start from '@tanstack/react-start';
console.log('Router:', Object.keys(Router).filter(k => /Meta|Head|Script/.test(k)));
console.log('Start:', Object.keys(Start).filter(k => /Meta|Head|Script/.test(k)));
