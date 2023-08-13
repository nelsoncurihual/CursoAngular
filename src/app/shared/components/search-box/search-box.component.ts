import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [],
})
export class SearchBoxComponent {
  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = '';

  emitValue(value:string) {
    this.onValue.emit(value);
  }
}
