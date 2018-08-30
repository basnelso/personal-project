import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PdfService } from '../services/pdf.service';
import { SimplePdfViewerComponent } from '../../../node_modules/simple-pdf-viewer';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;
  public pdfSrc: string;
  constructor(
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.pdfSrc = this.pdfService.getPDF();
    this.setZoom();
  }

  public setZoom() {
    this.pdfViewer.onLoadComplete.subscribe(() => {
      this.pdfViewer.setZoomInPercent(100);
    });
  }

}
