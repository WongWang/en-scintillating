interface CurrentMatch {
  original: string;
  revised: string;
  reason: string;
}

export interface ParsedSegment extends CurrentMatch {
  positions: { start: number, end: number }; // That's position in ORIGINAL test!
}

export function parseResponse(htmlText: string): ParsedSegment[] {
  // Capture "^^|original|^^|...|" as "..."
  const regex = /\^\^\|(original|revised|reason)\|\^\^\|([^|]*)\|\^\^/g;
  const segments: ParsedSegment[] = [];
  let current: Partial<CurrentMatch> = {};

  // Total length of "^^|original|^^|...| ^^|revised|^^|...| ^^|reason|^^|...|"
  let matchedContentLength = 0;  

  // Total length of content replaced original content
  //    if "^^|original|^^|x1|" "^^|original|^^|x2|" ...
  //    that's len(x1) + len(x2) + ...
  // Therefore, match.index - matchedContentLength + originalContentLength = actualIndex
  let originalContentLengthSum = 0;

  let isGroupBegin = true;
  let groupStartPos = 0;
  let originalContentLength = 0;

  for (const match of htmlText.matchAll(regex)) {
    const [fullMatch, typeName, content] = match;

    if (isGroupBegin) {
      isGroupBegin = false;
      groupStartPos = match.index - matchedContentLength + originalContentLengthSum;
    }

    matchedContentLength += fullMatch.length;
    if (typeName === "original") {
      originalContentLength = content.length;
      originalContentLengthSum += content.length;
    }

    current[typeName as keyof CurrentMatch] = content;

    // Group check: once 3 parts in a group are all parsed, push the result
    if (current.original && current.revised && current.reason) {
      isGroupBegin = true;
      matchedContentLength += 2; // There's always 2 spaces in the middle of a group
      segments.push({
        original: current.original,
        revised: current.revised,
        reason: current.reason,
        positions: { 
          start: groupStartPos, 
          end: groupStartPos + originalContentLength,
        },
      });
      current = {};  // Reset current to make the gruop check work
    }
  }

  return segments;
}
