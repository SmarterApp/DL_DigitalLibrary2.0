import {Component, OnInit} from '@angular/core';
import {TftErrorService} from '../../../common/tft-error.service';
import {TftErrorType} from '../../../common/tft-error-type.enum';

@Component({
  template: ``
})
export class PageNotFoundComponent implements OnInit {

  constructor(private errorService: TftErrorService) {
  }

  ngOnInit() {
    this.errorService.redirectTftError({
      type: TftErrorType.PageNotFound,
      details: '404'
    });
  }

}
