import React, { Component } from "react";
import { Document, Page } from "react-pdf";

const PDFHooks = ({ pdfFile }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div className="ml-80 mt-10">
        <p className="ml-60">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>{" "}
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <div>{"    "} </div>
        <Document
          file={pdfFile}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
          className="border-2 mr-80"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </>
  );
};

export default PDFHooks;

// Ref: https://codesandbox.io/s/displaying-pdf-using-react-5d003?from-embed=&file=/src/components/pdf/single-page.js:132-1219
