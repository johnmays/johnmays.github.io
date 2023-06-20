import LinkButton from '../Components/LinkButton';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
//import 'react-pdf/dist/esm/Page/TextLayer.css';

// importing PDFjs worker.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    // "pdfjs-dist/build/pdf.worker.min.js",
    "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

export default function Resume() {

    return(
        <div>
            <div className='pdf-window'>
                <Document file="06_13_23_mays_resume.pdf" onLoadError={console.error}> 
                    <Page pageNumber={1}  devicePixelRatio={2.0} renderTextLayer={false}/>
                </Document>
            </div>
        </div>
    )
}

/*
<div className='button-box'>
                <a href="/06_13_23_mays_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button>Download</button>
                </a>
            </div>
*/