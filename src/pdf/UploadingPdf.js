/*****
 * * Upload PDF functionality example...
 * * https://github.com/rieckpil/blog-tutorials/blob/master/pdf-preview-react/src/App.js
 */

/**
 * 
 * Initial input should be more, then it will automatically pick it up. After that,It will be so easy. 
For a rocket, initial fuel consumption will be more than what needed... then later for travel, it will consume far less.
Moral: Keep your thoughts straight for longer duration than usual and see what happen. 


https://theconversation.com/i-asked-hundreds-of-people-about-their-biggest-life-decisions-heres-what-i-learned-154885?utm_source=pocket-newtab-intl-en

https://getpocket.com/explore/item/11-simple-ways-to-improve-your-memory?utm_source=pocket-newtab-intl-en

https://www.scotthyoung.com/blog/2021/03/01/how-hard-work/?utm_source=pocket-newtab-intl-en


 */

import React from "react";
import { Document, Page } from "react-pdf";

class UploadingPdf extends React.Component {
  state = {
    file: null,
    numPages: 0,
    pageNumber: 1,
  };

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  previousPage = () => {
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  };

  nextPage = () => {
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>PDF Preview</h1>
        <form>
          <input type="file" onChange={this.onFileChange}></input>
        </form>
        <button onClick={this.previousPage}>Previous Page</button>
        <button onClick={this.nextPage}>Next Page</button>
        <Document
          file={this.state.file}
          onLoadSuccess={this.onDocumentLoadSuccess}
          noData={<h4>Please select a file</h4>}
        >
          <Page pageNumber={pageNumber} />
        </Document>

        {this.state.file ? (
          <p>
            Page {pageNumber} of {numPages}
          </p>
        ) : null}
      </div>
    );
  }
}

export default UploadingPdf;
