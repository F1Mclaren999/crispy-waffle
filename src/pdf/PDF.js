import React, { Component } from "react";
import { Document, Page } from "react-pdf";

export default class PDF extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    console.error();
    const { pdfFile } = this.props;

    return (
      <div className="ml-80 mt-10">
        <nav>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.goToPrevPage}
          >
            Prev
          </button>{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.goToNextPage}
          >
            Next
          </button>
        </nav>

        <div
          style={{
            width: 600,
          }}
        >
          <Document
            file={`${pdfFile}`}
            // file="C:\Users\AM\Downloads\java-collections-cheat-sheet.pdf"
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}
