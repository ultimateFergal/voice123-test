import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceActorsListComponent } from './voice-actors-list.component';

describe('VoiceActorsListComponent', () => {
  let component: VoiceActorsListComponent;
  let fixture: ComponentFixture<VoiceActorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceActorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceActorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
