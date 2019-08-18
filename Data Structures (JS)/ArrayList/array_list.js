//Building an Array list (Java style dynamic array) from the built in
//array object in JavaScript. Interesting project but nontheless is only for learning experiences

class ArrayList{
    //constructor should take a size and default value to initialize
    //the arraylist with given value
    constructor(capacity=0, value=undefined){
        
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
            }
            _size = _values.length;

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

        this.shiftValuesToRight = function(i=0){
            let startIndex = this.getSize() - 1;
            for(startIndex; startIndex >= i; startIndex--){
                _values[startIndex+1] = _values[startIndex];
            }
        }

        this.insertValue = function(index, value){
            //tru catch index errors if(index)
            //for now assume index in bounds
            _values[index] = value;
        }

        this.insertToEmptyList = function(value){
            let newList = new ArrayList(1, value);
            _values = newList.getValues();
            _capacity = newList.getCapacity();
            _size = newList.getSize();
        }

        this.prepend = function(value){

            if(this.getSize() === 0) this.insertToEmptyList(value);
            else{
                if(this.getSize() === this.getCapacity()) this.copyValuesToNewArray();
                this.shiftValuesToRight();
                _values[0] = value;
                _size++;
            }
        }

        this.append = function(value){
            if(this.getSize() === 0) this.insertToEmptyList(value);
            else{
                if(this.getSize() === this.getCapacity()) this.copyValuesToNewArray();
                _values[this.getSize()] = value;
                _size++;
            }
        }

        this.insertAt = function(index, value){
            if(index < 0 || index > this.getSize()) throw new Error("IndexOutOfBounds");

            if(this.getSize() === 0) this.insertToEmptyList(value);
            else{
                if(this.getSize() === this.getCapacity()) this.copyValuesToNewArray();

                if(index === 0) this.prepend(value);
                else if(index === this.getSize()) this.append(value);
                else{
                    //Core functionality
                    //Shift everything from size-1 down to and including index to the right,
                    this.shiftValuesToRight(index);
                    _values[index] = value;
                    _size++;
                    }
                }

        }

    }
    
}

list = new ArrayList();
list.insertAt(0, 7);
list.insertAt(0, 7);
list.insertAt(0, 7);
list.append(9);
list.prepend(6);
list.insertAt(3, 4);
list.insertAt(4, 8);
list.insertAt(7, 0);
list.insertAt(8, 22);
list.prepend(0);
list.append(15);
list.insertAt(3,5);
list.insertAt(3,5);


console.log(list.getCapacity());
console.log(list.getSize());
list.displayValues();