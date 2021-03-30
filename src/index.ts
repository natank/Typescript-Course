import {User} from './models/User'

const user = new User({name: 'myname', age: 20});

user.on('change', ()=>{
  console.log("change#1")
})

user.on('change', ()=>{
  console.log("change#2")
})

user.on('change222', ()=>{
  console.log("change#3 was triggered")
})

user.trigger('change222fafdsaasdf')