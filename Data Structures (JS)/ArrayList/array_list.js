//Building an Array list (Java style dynamic array) from the built in
//array object in JavaScript. Interesting project but nontheless is only for learning experiences

class ArrayList{
    //constructor should take a size and default value to initialize
    //the arraylist with given value
    constructor(capacity=0, value=0){
        
        let _capacity = null;
        let _value = value;
        let _values = null;
        let _size = 0;

        if(isNaN(capacity) || capacity < 0){
            _capacity = 0;
        }
        else{
            _capacity = capacity;
        }

        let initializeList = function(capacity, value) {
            _values = new Array(capacity);

            for(let i = 0; i < capacity; i++){
                _values[i] = value;
                _size++;
            }

            Object.seal(_values);
        }
        
        initializeList(_capacity, _value);

        this.displayValues = function(){
            //if(instanceof(_values) === 'Array'))
            let values = _values.map(function(elem){
                return elem;
            })
            console.log(values);
        }

        this.getValues = function(){
            return _values;
        }

        this.getSize = function(){
            return _size;
        }

        this.getCapacity = function(){
            return _capacity;
        }

        this.setCapacity = function(capacity){
            _capacity = capacity;
        }

        this.increaseCapacity = function(){
            this.setCapacity(this.getCapacity() * 2);
        }
    
        this.copyValuesToNewArray = function(){
            let i = 0;
            let originalCapacity = this.getCapacity();

            this.increaseCapacity();
            let newList = new Array(this.getCapacity());

            for(i; i < originalCapacity; i++){
                newList[i] = _values[i];
            }
            for(i; i < this.getCapacity(); i++){
                newList[i] = undefined;
            }

            _values = newList;

            Object.seal(_values);
        }

        this.shiftValuesToRight = function(){
            let startIndex = this.getSize() - 1;
            for(startIndex; startIndex >= 0; startIndex--){
                _values[startIndex+1] = _values[startIndex];
            }
        }

        this.insertValue = function(index, value){
            //tru catch index errors if(index)
            //for now assume index in bounds
            _values[index] = value;
        }

        this.prepend = function(value){
            //list is empty nothing to copy over, can instantiate new array list

            if(this.getSize() === this.getCapacity()){
                if(this.getSize() === 0){
                    let newList = new ArrayList(1, value);
                    _values = newList.getValues();
                    _capacity = newList.getCapacity();
                    _size = newList.getSize();
                }
                else{
                    this.copyValuesToNewArray();
                    this.shiftValuesToRight();
                    this.insertValue(0, value);
                    _size++;
                }
            }

            else{
                this.shiftValuesToRight();
                this.insertValue(0, value);
                _size++;
            }
        }
    

    }
    
}

list = new ArrayList(6,5);
list.prepend(8);
list.prepend(7);
list.prepend(6);
list.prepend(5);
list.prepend(4);

list.prepend(3);
list.prepend(2);
list.prepend(1);



console.log(list.getCapacity());
console.log(list.getSize());
list.displayValues();