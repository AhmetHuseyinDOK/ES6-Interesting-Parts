import {canSwim,canSpeak} from './abilities';

class PersonBase{}

class FishBase{}

export const Person = canSwim(canSpeak(PersonBase));
export const Fish =  canSwim(FishBase);
