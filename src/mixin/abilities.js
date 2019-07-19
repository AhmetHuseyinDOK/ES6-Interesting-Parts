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