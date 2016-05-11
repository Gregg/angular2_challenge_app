import { RACES } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class RaceService {
  getRaces() {
    return RACES;
  }
}
