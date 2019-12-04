## How an Array works

class Memory is instantiated with the constant to simulate memory and a head pointer pointing to 0 in that simulated memory

### Allocate
the method allocate() takes a size arg, sets the start to where the head is point
It then adds the size arg to this.head and returns the original head pointer..

If size + head is greater than the memory length it returns null

#### free method
takes a pointer param, is otherwise empty

#### copy method
copy takes 3 args: toIndex, fromIndex, and size.
If toIndex and fromIndex are the same it just returns

If toIndex is less than fromIndex, it runs another method - set -
A for loop iterating up to the size, it runs this.set(toIndex + i, this.get(fromIndex + i)) --- this formula sets everything from the size to an index one higher than it was
If from Index is less than toIndex, it runs the same this.set function, but iterating from size - 1 downwards to 0.

#### Set
set() takes a pointer and value args. It sets this.memory[pointer] to the value

#### Get
get() takes only a pointer and returns the address, this.memory[pointer]