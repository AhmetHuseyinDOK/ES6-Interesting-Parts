
import { Person, Fish } from '../src/mixin/classes';
test('fish swim',() => {
    expect(new Fish().swim()).toBe('i can swim');
});

test('person speak',() => {
    expect(new Person().speak()).toBe('i can speak');
})

test('person swim',()=>{
    expect(new Person().swim()).toBe('i can swim');
})