class SortRunner{
    constructor(sort){
        this.sort = sort;
        this.sort.run();
    }
}

//temporarily for dynamic arrays
class InsertionSort{
    constructor(list){
        this.list = list;

    }

    run(){
    //    this.implementationA();
       this.implementationB();
    }

    implementationA(){
        for(let i = 1; i < this.list.length; i++){
            let elementToInsert = this.list[i];
            for(let j = i-1; j >= 0; j--){
                if(elementToInsert < this.list[j]) this.list[j+1] = this.list[j];
                else break;
                this.list[j] = elementToInsert;
            }
        }
    }

    implementationB(){
        for(let i = 1; i < this.list.length; i++){
            let temp = this.list[i];
            let previous = i - 1;
            
            while(previous >= 0 && temp < this.list[previous]){
                this.list[previous+1] = this.list[previous];
                previous--;
            }

            this.list[previous+1] = temp;
        }
    }


}

let runner1 = new SortRunner(new InsertionSort([0,0,0,0,55,55555,55555555,0,0,0,0,0,0,-99,-98,-97,-96,-5,-1000]));
console.log(runner1.sort.list);