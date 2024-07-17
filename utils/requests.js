const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties({ showFeatured = false } = {}) {
  
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
      {next: { revalidate: 0 }},
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json(); // Corrected this line
  
}
// Fetch single property
async function fetchProperty(id) {

    // handle the case where the apiDomain is null

    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json(); // Corrected this line
  
}

export { fetchProperties, fetchProperty };
