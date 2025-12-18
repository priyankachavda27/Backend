// Create base URL
const url = new URL("https://example.com");

// Append pathname
url.pathname = "/products";

// Append query parameters
url.searchParams.append("id", 101);
url.searchParams.append("category", "mobile");

// Print final URL
console.log(url.toString());