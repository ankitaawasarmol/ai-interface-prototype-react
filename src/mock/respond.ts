
/**
 * Mock LLM response generator.
 * Pretends to call a model and returns a JSON payload.
 */
export type MockRequest = {
  model: string
  prompt: string
  params: { temperature: number; maxTokens: number; topP: number }
}

export type MockResponse = {
  id: string
  created: number
  model: string
  choices: { index: number; text: string }[]
  usage: { prompt_tokens: number; completion_tokens: number; total_tokens: number }
}

export async function mockRespond(req: MockRequest): Promise<MockResponse> {
  await new Promise(r => setTimeout(r, 300))
  const fake = `You asked ${req.model} with T=${req.params.temperature} and top_p=${req.params.topP}.\n\n` +
               `Here is a playful (mock) response to your prompt:\n---\n${req.prompt.slice(0, 100)}...`
  return {
    id: Math.random().toString(36).slice(2),
    created: Date.now(),
    model: req.model,
    choices: [{ index: 0, text: fake }],
    usage: { prompt_tokens: 42, completion_tokens: 84, total_tokens: 126 }
  }
}
