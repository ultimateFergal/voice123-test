import { TestBed } from '@angular/core/testing';

import { VoiceActorsService } from './voiceActors.service';

describe('Voice123ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoiceActorsService = TestBed.get(VoiceActorsService);
    expect(service).toBeTruthy();
  });
});
