import { Editor } from '@tiptap/core';

function generatePrompt(text: string, grammarOnly: boolean, style: 'formal' | 'casual' | 'amusing') {
  const styleMap = {
    formal: "使用正式学术用语",
    casual: "使用日常口语表达",
    amusing: "使用幽默元素",
  };

  return `
  请润色以下英语文章，要求：
  1. ${grammarOnly ? "仅修正语法错误，不要替换原文用词和语序" : ("优化语法和用词，原文的语言风格上" + styleMap[style])}
  2. 保持原文段落结构与内容
  3. 返回时只返回纯文本形式，且保留原文的 HTML 标签
  4. 返回时在每处修改位置用 ^^|original|^^|...|^^ 的形式给出修改前的原文
  5. 返回时在每处修改位置用 ^^|reason|^^|...|^^ 的形式给出修改的理由，且在其中 ... 部分开头使用 "Error: " 和 "Warn: " 指示错误级别
  6. 返回时在每处修改位置用 ^^|revised|^^|...|^^ 的形式给出修改后替换原文的文本
  7. 修改的理由总是使用最简洁且正式的描述

  原文：
  ${text}
  `.trim();
}

export const analyzeWithDeepSeek = async (
  editor: Editor
): Promise<string> => {
  const originalText = editor.getHTML();
  if (originalText === "<p></p>") {
    return "";
  }
  // TODO: Add fearure to let user choose whether to use "grammarOnly" and the style they want to use
  const content = generatePrompt(originalText, true, 'formal');

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) throw new Error('Analysis failed');
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    return "";
  }
};