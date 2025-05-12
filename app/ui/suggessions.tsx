"use client";

import { useState, useEffect } from "react";
import EmptySuggession from "./emptySuggession";
import { parseResponse, ParsedSegment } from "../lib/parseResponse";
import { Harm, ArrowRight } from "@icon-park/react";

function Suggestions({ response }: { response: string }) {
  const [parsedResult, setParsedResult] = useState<ParsedSegment[] | null>(null);

  // Parse when response changed
  useEffect(() => {
    if (response) {
      const parsed = parseResponse(response);
      setParsedResult(parsed);
    }
  }, [response]);

  // Render after response is parsed
  const renderContent = () => {
    if (parsedResult && parsedResult.length > 0) {
      return (
        <div className="border-l border-nord1 min-h-screen flex flex-col">
          <div className="flex flex-row justify-center items-center h-15 bg-nord4">
            <p className="text-lg font-bold text-nord0">Suggestions</p>
          </div>
          {parsedResult.map((segment, index) => (
            <div key={index} className="mx-8 py-5 border-b border-nord1 flex flex-col gap-1">
              <div className="flex flex-row items-center gap-3">
                <Harm theme="outline" size="22" fill={segment.reason.startsWith("Error: ") ? "#bf616a" : "#d08770"}/>
                <p className="font-bold">{segment.reason.replace(/^(Error: |Warn: )/, "")}</p>
              </div>
              <div className="pl-8 flex flex-row gap-3">
                <s className="whitespace-pre"> {segment.original} </s>
                <ArrowRight theme="outline" size="22" fill="#eceff4"/>
                <p> {segment.revised} </p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="border-l border-nord1 min-h-screen flex flex-col">
          <EmptySuggession />
        </div>);
    }
  };

  return <div>{renderContent()}</div>;
}

export default Suggestions;
