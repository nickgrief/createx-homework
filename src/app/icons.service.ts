import { Injectable } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  iconList = [
    'facebook',
    'twitter',
    'youtube',
    'telegram',
    'instagram',
    'linkedin',
    'google',
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    for (let icon of this.iconList) {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/${icon}.svg`)
      );
    }
  }
}
