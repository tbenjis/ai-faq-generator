import { OpenAI } from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { description, audience, painPoints, tone } = await req.json()

    if (!description) {
      return NextResponse.json(
        { error: "Product description is required" },
        { status: 400 }
      )
    }

    const prompt = `Generate 10 FAQs for a ${description}.
Target audience: ${audience || "general"}
Pain points to address: ${painPoints || "general concerns"}
Use a ${tone || "professional"} tone.
Include questions about pricing, features, and common concerns.
Format the response in markdown with ### FAQ as the heading.
Make answers concise and helpful.`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful FAQ generator that creates comprehensive and relevant questions and answers for products and services.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const generatedFAQ = completion.choices[0].message.content

    return NextResponse.json({ faq: generatedFAQ })
  } catch (error) {
    console.error("FAQ generation error:", error)
    return NextResponse.json(
      { error: "Failed to generate FAQ" },
      { status: 500 }
    )
  }
} 