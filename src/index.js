import './App.css'
import { f1 } from './filter.js'
function xx() {
	return () => 3
}
f1()
console.log(xx()());
