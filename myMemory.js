class Memory {
    constructor(){
        this.memory = new Float64Array(1032)
        this.head = 0
    }

    allocate(size){
        if (size + this.head > this.memory.length){
            return null
        }  
        let start = this.head
        this.head+= size
        return start
    }

    free(ptr){}

    copy(){
        
    }

    set(){}
    get(){}
}