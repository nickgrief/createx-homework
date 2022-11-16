import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBannerComponent } from './subscribe-banner.component';

describe('SubscribeBannerComponent', () => {
  let component: SubscribeBannerComponent;
  let fixture: ComponentFixture<SubscribeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
