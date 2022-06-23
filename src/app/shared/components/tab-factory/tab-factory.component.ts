import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

export class AdTab {
  constructor(public component: Type<any>, public data: any) { }
}

export interface HostComponent {
  data: any;
}

@Component({
  selector: 'app-tab-factory',
  templateUrl: './tab-factory.component.html',
  styleUrls: ['./tab-factory.component.scss']
})
export class TabFactoryComponent implements AfterViewInit {
  @Input() tabDetails: AdTab[] = [];
  selectedTabIndex: number = 0;
  @ViewChild('tab', { read: ViewContainerRef })
  tab!: ViewContainerRef;

  constructor(private r: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    this.loadTab(this.tabDetails[this.selectedTabIndex], this.selectedTabIndex);
  }

  loadTab(tab: AdTab, index: number) {
    this.selectedTabIndex = index;
    this.tab.clear();
    const factory = this.r.resolveComponentFactory(tab.component);
    const component = this.tab.createComponent(factory);
    component.instance.data = { sample: "" }
  }

}


