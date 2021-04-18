<template>
  <div class="card">
    <div>
      <p class="title mb-15">Todo List</p>
      <div class="todo">
        <div class="add mb-15">
          <input type="text" class="input-add" />
          <button class="button-add">追加</button>
        </div>
        <div class="update mb-5">
          <input type="text" class="input-update" />
          <div class="button-edit">
            <button class="button-update">更新</button>
            <button class="button-delete">削除</button>
          </div>
        </div>
        <div class="update mb-5">
          <input type="text" class="input-update" />
          <div class="button-edit">
            <button class="button-update">更新</button>
            <button class="button-delete">削除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

.button-add {
  border: 2px solid #dc70fa;
  font-size: 12px;
  color: #dc70fa;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
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
  font-size: 12px;
  color: #fa9770;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.button-update:hover {
  color: #fff;
  background-color: #fa9770;
  transition: 0.4s;
}

.button-delete {
  border: 2px solid #71fadc;
  font-size: 12px;
  color: #71fadc;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.button-delete:hover {
  color: #fff;
  background-color: #71fadc;
  transition: 0.4s;
}
</style>
