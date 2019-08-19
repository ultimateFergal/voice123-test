import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { VoiceActorsService } from '../../services/voiceActors.service';

@Component({
  selector: 'app-voice-actors-list',
  templateUrl: './voice-actors-list.component.html',
  styleUrls: ['./voice-actors-list.component.css']
})
export class VoiceActorsListComponent implements OnInit {


  voiceActorsList: any[];
  public form: FormGroup;

  public validate_messages = {
    'keyWord': [
      { type: 'saldoAfavor', message: 'Tienes saldo a favor, no es posible realizar un pago' },
      { type: 'valorNegativo', message: 'Selecciona otro valor' },
      { type: 'required', message: 'Please enter a keyword' },
    ],
  };

  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'https://voice123.com/christileblanc/samples?id=7127683';

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  public p: Number = 1;
  public count: Number = 5;

  constructor(
    private voice123Service: VoiceActorsService,
    private _fb: FormBuilder
    ) { }

  ngOnInit() {
    // this.getAllVoiceActors();
    this.createForm();
  }


  createForm(): void {
    this.form = this._fb.group({
      keyWords:  ['', Validators.required]
    });
  }

  getAllVoiceActors(): void {
    this.voice123Service.getAllVoiceActors()
      .subscribe(
        res => {
          this.voiceActorsList = res;
          console.log(res);
        },
        err => console.log(err)
      );
  }

  getVoiceActorsByKeyWords(keyWords: string): void {
    this.voice123Service.getVoiceActorsByKeyWords(keyWords)
      .subscribe(
        res => {
          this.voiceActorsList = res;
          console.log(res);
        },
        err => console.log(err)
      );
  }

  enterBreak(evt: any) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 13 && !this.form.valid) {
      evt.preventDefault();
      return;
    } else if (charCode === 13 && this.form.valid) {
      evt.preventDefault();
      this.searchVoiceActors();
      return;
    }
  }

  searchVoiceActors() {
    if (this.form.valid) {
      const keyWords = this.form.get('keyWords').value;
      this.getVoiceActorsByKeyWords(keyWords);
    }
  }

}
