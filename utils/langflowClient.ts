const BASE_API_URL = "https://api.langflow.astra.datastax.com";
const LANGFLOW_ID = "f25c61a6-938c-47ee-8245-bad2cd585c3c";
const FLOW_ID = "4440b57f-285f-4dff-a87e-285816573031";
const APPLICATION_TOKEN = "AstraCS:vctfelBPDNADdtCtUNxuUeTH:ae8e3585afab143df5c9ac927fdfd0430638b0ae46daa0a443555d1497a11f69";

export async function runLangflowAPI(inputValue: string, inputType = 'chat', outputType = 'chat', stream = false) {
  const endpoint = `/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}?stream=${stream}`;
  const url = `${BASE_API_URL}${endpoint}`;

  const tweaks = {
    "ChatInput-ivyVt": {},
    "Prompt-lpeoJ": {},
    "ChatOutput-eV0ob": {},
    "OpenAIModel-SzTnW": {},
  };

  const body = {
    input_value: inputValue,
    input_type: inputType,
    output_type: outputType,
    tweaks,
  };

  const headers = {
    "Authorization": `Bearer ${APPLICATION_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Request Error:', error);
    throw error;
  }
}

