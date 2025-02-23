/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BotomeComponent } from './botome.component';

describe('BotomeComponent', () => {
  let component: BotomeComponent;
  let fixture: ComponentFixture<BotomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
