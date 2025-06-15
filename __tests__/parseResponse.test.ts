import { parseResponse, ParsedSegment } from '../app/lib/parseResponse';

describe('parseResponse', () => {
  it('should correctly parse the response and keep spaces', () => {
    const input = "The same goes for misused commas, and other types of punctuation ^^|original|^^| .|^^ ^^|reason|^^|Space before period should be removed|^^ ^^|revised|^^|.|^^";
    
    const expectedOutput: ParsedSegment[] = [
      {
        original: " .",
        revised: ".",
        reason: "Space before period should be removed",
        positions: {
          start: 65,
          end: 67,
        },
      },
    ];

    const result = parseResponse(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array when no markers are present', () => {
    const input = `No markers here`;
    const result = parseResponse(input);

    expect(result).toEqual([]);
  });
});