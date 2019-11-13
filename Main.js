

Vue.component('to-do-app', {
props: {},
data() {
return {}
},
template: 
`<div id="app" >
<h1>To Do List <img class="image" src="checkmark.jpg"/> </h1>
 <br>
<list-items/>

</div>`,


})

Vue.component('list-items', {
  props: {},
  data() {
  return {
    items: [
      { task: 
        {name: null, isComplete: false}
      }
    ],
    }
  },
  methods: {
       //Adds item to list, if nothing in input nothing happens. Resets input to blank
       AddItem() {                                         
        inputField = document.getElementById(`input`);
        i = 1; //Test
        if (inputField.value != "") {
          this.items.push({task: {name: (inputField.value), isComplete: false}});
          
          console.log(this.items[i].task); //Testing Purposes 
          ++i;      
        }
      inputField.value="";                                
      }
  },
  template: 
  `<div> 
  <ul v-if="items[1]" class = "inner">
  <li v-if="item.task.name" v-for="(item, index) in items" >
    <h6 v-show="item.task.isComplete"> <del><input type="checkbox" v-model="item.task.isComplete" checked> {{ item.task.name }}</del> </h6>
    <h6 v-show="!item.task.isComplete"><input type="checkbox" v-model="item.task.isComplete"> {{ item.task.name }} </h6>
  </li>
</ul>

  <div class="input-group mb3 input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">New Item</span>
    </div>
      <input @keyup.enter="AddItem" type="text" id="input">
      
  </div>
  <br>
    <button class="btn btn-primary" style="danger" @click="AddItem" id="addItem">Add Task</button> 
</div>`,
  })


var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      greeting: 'what up',
      id: 0,
      //To do list items
      items: []
    },

    methods: {
      
      //Adds item to list, if nothing in input nothing happens. Resets input to blank
      AddItem() {                                         
        inputField = document.getElementById(`input`);
        
        if (inputField.value != "") {
          this.items.push({item: (inputField.value) });
          
          //Testing Purposes
          console.log(this.items,this.id);        
        }
      this.id+=2;  
      inputField.value="";                                
      }
    }
  })

  //Create multiple components to accompolish to do list