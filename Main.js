Vue.component("to-do-app", {
  props: {},
  data() {
    return {};
  },
  template: `
  <div id="app" >
    <h1>To Do List <img class="image" src="checkmark.jpg"/> </h1>

    <list-items/>
  </div>`
});

Vue.component("ListItem", {
  props: {
    todoItem: {
      type: Object
    }
  },
  methods: {
    deleteItem(e) {
      e.target.remove();
    },
    complete(e) {
      if (e.target.classList == "itemName") {
        e.target.classList.add("completed");
        e.target.isComplete = true;
        //this.$emit(e.target.isComplete);
      } else {
        e.target.classList.remove("completed");
        e.target.isComplete = false;
      }
    },
    highlight(e) {
      if (e.target.classList != "itemName" && e.target.classList != "itemName completed") {
        e.target.classList.add("highlight");
      }
      
    },
    unhighlight(e) {
      e.target.classList.remove("highlight");
    }
  },
  template: 
  ` <div data-toggle="tooltip" data-placement="top" title="Click Due Date Created to Delete" @click="deleteItem" class="item" @mouseout="unhighlight">
     
      <span   @click="complete" class="itemName"> {{ todoItem.name }} </span> <br> Due Date: {{ todoItem.dueDate }} <br> {{todoItem.dayTime}} 
      
    </div>`
});

Vue.component("list-items", {
  props: [],
  data() {
    return {
      items: [{ task: {} }],
      id: 0
    };
  },
  methods: {
    //Adds item to list, if nothing in input nothing happens. Resets input to blank
    AddItem() {
      inputField = document.getElementById(`input`);
      inputDue = document.getElementById(`due`);
      assignedDue = inputDue.value;

      if (inputField.value != "") {
        var d = new Date();
        var date = d.toLocaleString();
        if (assignedDue == "") {
          assignedDue = "None";
        }
        this.items.push({
          task: {
            name: inputField.value,
            isComplete: false,
            dayTime: date,
            dueDate: assignedDue,
            id: this.id
          }
        });

        this.id += 1;
      }

      inputField.value = "";
      inputDue.value = "";
    },
    //Delete item from list
    DeleteCompleted() {
      this.items = this.items.filter(item => {
        return !item.task.isComplete;
      });
    }
  },
  template: `<div> 
  <ul class = "inner">
      
        <ListItem
          v-show="item.task.name" 
          v-for="item in items"
          :todoItem="item.task"/>
      
  </ul>

 
<div class="input-group mb3 input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">New Item:</span>
    </div>
      <input @keyup.enter="AddItem" type="text" id="input">
      <div class="input-group-prepend">
      <span class="input-group-text">Due:</span>
    </div>
      <input @keyup.enter="AddItem" placeholder=" ex. August 1st" type="text" id="due">
    </div>
    
  <br>
    <button class="btn btn-med btn-outline-primary" style="danger" @click="AddItem" id="addItem">Add Task</button>
    <button class = "btn btn-med btn-outline-secondary" @click="DeleteCompleted">Clear Completed</button>
        
</div>`
});

//Necessary for App to Function, don't delete
var app = new Vue({
  el: "#app",
  data: {},

  methods: {}
});
