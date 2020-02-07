import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef,
  Injectable, Injector } from '@angular/core';
import { ResourceAttachment } from 'src/app/data/resource/model/attachment.model';
import { PreviewComponent } from './preview.component';

@Injectable({ providedIn: 'root' })
export class PreviewService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  preview(attachment: ResourceAttachment): PreviewComponent {

    const previewRef = this.resolver
      .resolveComponentFactory(PreviewComponent)
      .create(this.injector);

    previewRef.instance.attachment = attachment;

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(previewRef.hostView);

    // Get DOM element from component
    const domElem = (previewRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);

    setTimeout(() => {
      previewRef.instance.onClose.subscribe(() => {
        this.appRef.detachView(previewRef.hostView);
        previewRef.destroy();
      });
    }, 0);

    return previewRef.instance;
  }
}
