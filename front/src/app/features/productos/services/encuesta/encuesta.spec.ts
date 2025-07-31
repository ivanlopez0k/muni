import { TestBed } from '@angular/core/testing';
import { Encuesta } from '../../pages/encuesta/encuesta.component';


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
