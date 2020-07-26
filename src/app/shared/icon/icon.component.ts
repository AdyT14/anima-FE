import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {iconsSvg} from './icons-svg';

@Component({
  selector: 'app-icon',
  template: '',
  styleUrls: ['./icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit{

  @Input('iconName')
  iconName: string;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.element.nativeElement.innerHTML = iconsSvg[this.iconName];
  }
}
