const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties() {
  try {
    // handle the case where the apiDomain is null

    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties/`);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json(); // Corrected this line
  } catch (error) {
    console.error(error);
    return [];
  }
}
// Fetch single property
async function fetchProperty(id) {
  try {
    // handle the case where the apiDomain is null

    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json(); // Corrected this line
  } catch (error) {
    console.log(error);
    return null;
  }
}



export { fetchProperties, fetchProperty};
