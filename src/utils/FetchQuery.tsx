import OpenAI from "openai";
import { toast } from "react-toastify";

// Returns response from OpenAI through API call
export async function fetchQuery(
  query: string,
  setResponse: (res: string) => void,
  setIsShaking: (bool: boolean) => void
) {
  // Initialises openAI
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a magic eightball who answers only yes or no questions. 
                          Answer the question with a single, customized sentence related to the query within 40 to 80 characters. 
                          Alternate between positive, negative and neutral answers. Use a mysterious, but not eloquent tone`,
        },
        {
          role: "user",
          content: "will the weather be great tomorrow",
        },
        {
          role: "assistant",
          content: "My radars detect a high chance of thunderclouds and rain.",
        },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const response = (await completion.choices[0].message.content) as string;
    await setResponse(response);
    await setIsShaking(false);
  } catch (error: any) {
    // If there is a connection error, then trigger a warning and reset home page
    toast.warn("You are not connected. Please check internet...");
    setResponse(
      "Ask your question and the magic eightball will reveal its mysterious wisdom."
    );
    setIsShaking(false);
  }
}
