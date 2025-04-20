import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  const { content } = await request.json();  

  const openai = new OpenAI({
    apiKey: apiKey,
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  });

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek-v3",
      messages: [
        { role: "user", content: content }
      ],
    });

    return NextResponse.json({
      result: completion.choices[0].message.content
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'API request failed' },
      { status: 500 }
    );
  }
}