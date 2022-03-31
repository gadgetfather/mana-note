import React from "react";
import { OptionMenu } from "../../components";
import "./InfoPage.css";
export function InfoPage() {
  return (
    <div className="info-page">
      <h2 className="page-title">- Information -</h2>
      <ul>
        <li>
          For Bold use <code>**word**</code>
        </li>
        <li>
          For Italic use <code>*word*</code>
        </li>
        <li>
          For bullet points use <code>- word</code>
        </li>
        <li>
          For different headings use <code> #</code> for h1, <code>##</code>
          for h2 and <code>###</code>
          for h3
        </li>
        <li>
          For more you can visit this
          <a className="link" href="https://www.markdownguide.org/basic-syntax">
            {" "}
            Here
          </a>
        </li>
      </ul>

      <OptionMenu />
    </div>
  );
}
