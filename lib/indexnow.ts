export async function submitToIndexNow(urls: string[]) {
  const API_KEY = "b21c1bf29be34a1a8ff7cd93468886b7"
  const HOST = "https://openbalti.com"

  const endpoint = "https://api.indexnow.org/indexnow"

  const body = {
    host: HOST,
    key: API_KEY,
    urlList: urls,
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    console.log("IndexNow response:", res.status)
  } catch (error) {
    console.error("IndexNow error:", error)
  }
          }
