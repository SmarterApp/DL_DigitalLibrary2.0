import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadMoreComponent } from './read-more.component';

describe('ReadMoreComponent', () => {
  let component: ReadMoreComponent;
  let fixture: ComponentFixture<ReadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show more link and truncate if more than MaxNumberOfCharacters', ()=> {
    component.text = `Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. 
      Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl 
      Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched 
      fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of 
      Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s 
      snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters 
      from no one Dervish and Banges leg.`;

    fixture.detectChanges();

    const actual = fixture.debugElement.nativeElement;
    expect(actual.textContent.length).toBeLessThan(component.text.length);
    expect(actual.querySelector('a').textContent).toContain('more');        
  });

  it('should show less link and not truncate if more than MaxNumberOfCharacters', ()=> {
    component.text = `Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. 
      Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl 
      Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched 
      fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of 
      Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s 
      snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters 
      from no one Dervish and Banges leg.`;

    component.toggleCollapsed();
    fixture.detectChanges();

    const actual = fixture.debugElement.nativeElement
    expect(actual.textContent).toContain(component.text);
    expect(actual.querySelector('a').textContent).toContain('less');        
  });

  it('should hide more / less link when given text is less than MaxNumberOfCharacters', ()=> {
    component.text = `small-text`;
    fixture.detectChanges();

    const actual = fixture.debugElement.nativeElement
    expect(actual.textContent).toContain(component.text);
    expect(actual.querySelector('a')).toBeNull();        
  });
});
