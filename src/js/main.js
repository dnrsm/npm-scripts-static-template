import Vue from "vue"
import Person from "./util/Person.ts"
import Hello from "./components/Hello.vue"

const person = new Person("nanashi")
console.log(person.getName())

Vue.component(Hello.name, Hello)
new Vue({ el: "#root" })
