import { TestBed } from '@angular/core/testing';

import { Encuesta } from './encuesta';

describe('Encuesta', () => {
  let service: Encuesta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encuesta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
