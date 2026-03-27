export async function apiFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    const errorMsg = "API Error: NEXT_PUBLIC_API_URL is not defined.";
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  const fullUrl = `${baseUrl}${url}`;

  try {
    const res = await fetch(fullUrl, {
      ...options,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (VritStore; ecommerce build environment) AppleWebKit/537.36",
        ...options?.headers,
      },
    });
    if (!res.ok) {
      const errorMsg = `API request failed with status ${res.status} for URL: ${fullUrl}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
    return (await res.json()) as T;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Fetch error for ${fullUrl}: ${error.message}`);
    }
    throw error;
  }
}
