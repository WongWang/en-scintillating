export interface ParsedSegment {
  original: string;
  revised: string;
  reason: string;
}

export function parseResponse(htmlText: string): ParsedSegment[] {
  // 预处理
  const cleanText = htmlText
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ');

  // 匹配标记
  const regex = /\^\^\|(original|revised|reason)\|\^\^\|\s*([^|]+?)\s*\|\^\^/gs;
  const segments: ParsedSegment[] = [];
  let current: Partial<ParsedSegment> = {};

  for (const match of cleanText.matchAll(regex)) {
    const [_, type, content] = match;
    current[type as keyof ParsedSegment] = content.trim();

    // 当集齐三个字段时保存结果
    if (current.original && current.revised && current.reason) {
      segments.push({
        original: current.original,
        revised: current.revised,
        reason: current.reason
      });
      current = {};
    }
  }

  return segments;
}