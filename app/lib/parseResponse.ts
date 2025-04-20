interface ParsedSegment {
  original: string;
  revised: string;
  reason: string;
}
  
function parseResponse(result: string): ParsedSegment[] {
  const regex = /\^\^\|original\|\^\^(.+?)\^\^\|(.+?)\^\^\|reason\|\^\^(.+?)\^\^/gs;
  const matches = [...result.matchAll(regex)];
  return matches.map(match => ({
    original: match[1].trim(),
    revised: match[2].trim(),
    reason: match[3].trim(),
  }));
}