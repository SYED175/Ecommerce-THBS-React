import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
  elementType?: string;
}

const ExpandableText = ({ children, maxChars, elementType = "p" }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <h5 className="mb-3">{children}</h5>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <div>
      {React.createElement(
        elementType,
        { className: "mb-3" },
        <>
          {text}
          {!isExpanded && <span>...</span>}
          <a
            className="expandable-link"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Less" : "More"}
          </a>
        </>
      )}
    </div>
  );
};

// <h5 className="mb-3">
// {text}
// {!isExpanded && <span>...</span>}
// <a
//   className="expandable-link"
//   onClick={() => setIsExpanded(!isExpanded)}
// >
//   {isExpanded ? " Less" : "More"}
// </a>
// </h5>

export default ExpandableText;
