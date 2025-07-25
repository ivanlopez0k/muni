import { TestBed } from '@angular/core/testing';

import { EncuestasUsuarios } from './encuestas-usuarios';

describe('EncuestasUsuarios', () => {
  let service: EncuestasUsuarios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestasUsuarios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
