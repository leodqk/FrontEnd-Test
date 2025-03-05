import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ code }) {
  return (
    <div className="code-block">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
