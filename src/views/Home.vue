<template>
  <div class="card">
    <div>
      <p class="title mb-15">Todo List</p>
      <div class="todo">
        <div class="add mb-15">
          <input type="text" name="add" id="add" class="input-add" v-model="newTodo"/>
          <button class="button-add" @click="insertTodo">追加</button>
        </div>
        <div class="update mb-5" v-for="item in todoLists" :key="item.id">
          <input type="text" class="input-update" v-model="item.todo"/>
          <div class="button-edit">
            <button class="button-update" @click="updateTodo(item.id, item.todo)">更新</button>
            <button class="button-delete" @click="deleteTodo(item.id)">削除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newTodo: "",
      todoLists:[],
    };
  },
  methods: {
    async getTodo() {
      const resData = await axios.get("http://127.0.0.1:8000/api/todolists/");
      this.todoLists = resData.data.data;
      this.newTodo = "";
    },
    async insertTodo() {
      const sendData = {
        todo: this.newTodo
      };
      await axios.post("http://127.0.0.1:8000/api/todolists/", sendData);
      await this.getTodo();
    },
    async updateTodo(id, todo) {
      const sendData = {
        todo: todo,
      };
      await axios.put("http://127.0.0.1:8000/api/todolists/" + id, sendData);
      await this.getTodo();
    },
    async deleteTodo(id) {
      await axios.delete("http://127.0.0.1:8000/api/todolists/" + id);
      await this.getTodo();
    },
  },
  created() {
    this.getTodo();
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  width: 50%;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.title {
  color: black;
  font-weight: bold;
  font-size: 24px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-5 {
  margin-bottom: 5px;
}

.add {
  display: flex;
  justify-content: space-between;
}

.input-add {
  width: 80%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}

button{
  font-size: 12px;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.button-add {
  border: 2px solid #dc70fa;
  color: #dc70fa;
}

.button-add:hover {
  color: #fff;
  background-color: #dc70fa;
  transition: 0.4s;
}

.update {
  display: flex;
  justify-content: space-between;
}

.input-update {
  width: 30%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}

.button-update {
  border: 2px solid #fa9770;
  color: #fa9770;
  margin-right: 5px;
}

.button-update:hover {
  color: #fff;
  background-color: #fa9770;
  transition: 0.4s;
}

.button-delete {
  border: 2px solid #71fadc;
  color: #71fadc;
}

.button-delete:hover {
  color: #fff;
  background-color: #71fadc;
  transition: 0.4s;
}
</style>
