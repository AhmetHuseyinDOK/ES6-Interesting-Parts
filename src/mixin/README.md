# ES6 Mixin
We can mimix multiple inheritence with this feature.
First let's write two classes
```
/abilities.js

export const canSwim = SuperClass => class extends SuperClass{
    swim(){
        return 'i can swim'
    }
}

export const canSpeak = SuperClass => class extends SuperClass{
    speak(){
        return 'i can speak'
    }
}

```

then let's use this classes on Fish and Person Class

```
/classes.js

import {canSwim,canSpeak} from './abilities';

class PersonBase{}

class FishBase{}

export const Person = canSwim(canSpeak(PersonBase));
export const Fish =  canSwim(FishBase);


```

we can use them like below different file

```
/test.js

import { Person, Fish } from '/classes';

new Fish().swim(); //prints 'i can swim'
new Person().speak(); //prints 'i can speak'
new Person().swim(); //prints 'i can swim'

```