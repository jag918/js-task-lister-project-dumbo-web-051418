
  const List = (function(){

    let listId=0
    let all = []

    return class {
      constructor (name) {
        this.name=name
        this.listId=++listId
        all.push(this)
      }

      createList() {
        return ` <h2>${this.name}<button data-title="${this.name}" class="delete-list">X</button></h2><ul></ul>`

      }

      static findAll(){
        return all
      }


    }
  })();
