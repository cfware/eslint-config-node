import importIndex from '../index.js';
import importExtensions from './import-extensions.js';

class Foo {
	#field1;
	#field2;
	#field3;
}

console.log(importExtensions, importIndex, Foo);
