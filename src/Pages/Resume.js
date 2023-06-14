import LinkButton from '../Components/LinkButton';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// importing PDFjs worker.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    // "pdfjs-dist/build/pdf.worker.min.js",
    "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

export default function Resume() {

    const handleClick = () => {

    }

    return(
        //renderTextLayer={false}
        <div>
            <div className='pdf-box'>
                <Document file="06_13_23_mays_resume.pdf" onLoadError={console.error}> 
                    <Page pageNumber={1}  devicePixelRatio={2.0}/>
                </Document>
            </div>
            <div>
                <a href="/06_13_23_mays_resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button>Download</button>
                </a>
            </div>
        </div>
    )
}

// <button href><a href="/06_13_23_mays_resume.pdf" download>Download</a></button>