import { Todo } from "./todo.class";

export class TodoList{
    
    constructor(){
        this.cargarLocalStororage();

        // this.todos=[];
    }

    nuevoTodo( todo ) {
        this.todos.push(todo);
        this.guardarLocaStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo=>todo.id !=id);
        this.guardarLocaStorage();
    }
    
    marcarCompletado(id){
        for (const todo of this.todos) {
            console.log(todo.id+'   '+id );
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocaStorage();
            }   
        }
    }
    eliminarCompletados(){
        this.todos = this.todos.filter(todo=>!todo.completado);
        this.guardarLocaStorage();
    }

    guardarLocaStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStororage(){
        this.todos = (localStorage.getItem('todo')) ? 
                            JSON.parse(localStorage.getItem('todo')):[];
        
        this.todos = this.todos.map(Todo.fromJson /*obj => Todo.fromJson(obj)*/ );
    }
}