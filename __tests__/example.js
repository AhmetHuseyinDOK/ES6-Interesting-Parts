import {ExampleClass} from '../main';
test('should fail',() => {
    expect(()=>{
        new ExampleClass().fail()
    }).toThrow('fails');
});

test('should success',() => {
    expect(new ExampleClass().success()).toBe(true);
})