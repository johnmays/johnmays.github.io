import { pdfjs, Document, Page } from 'react-pdf';

// importing PDFjs worker.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    // "pdfjs-dist/build/pdf.worker.min.js",
    "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

export default function Resume() {

    return(
        //style={{height: "75vh", width: "100vw", display: "flex", overflow: "hidden"}}
        //"06_13_23_mays_resume.pdf"
        <div className='pdf-box'>
            <Document file="test_resume.pdf" onLoadError={console.error}> 
                <Page pageNumber={1} renderTextLayer={false} scale={1.0} renderMode='svg'/>
            </Document>
        </div>
    )
}