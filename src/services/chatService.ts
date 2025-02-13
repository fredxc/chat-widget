const FAKE_API_URL = "https://fakerapi.it/api/v2/custom";

interface FakeApiResponse {
  data: { message: string }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getBotResponse(_userMessage: string): Promise<string> {
  try {
    const url = new URL(FAKE_API_URL);
    url.search = new URLSearchParams({
      _quantity: "1",
      _locale: "en_US",
      message: "text",
    }).toString();

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data: FakeApiResponse = await response.json();
    return data?.data?.[0]?.message ?? "I didn't understand that.";
  } catch (error) {
    console.error("Error fetching bot response:", error);
    return "Sorry, I'm having trouble responding right now.";
  }
}
