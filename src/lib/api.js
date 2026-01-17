// API utility functions for PlantPedia

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Generic API request function
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

// Plants API functions
export const plantsApi = {
  // Get all plants with optional filters
  getAll: async (params = {}) => {
    const searchParams = new URLSearchParams(params);
    return apiRequest(`/plants?${searchParams}`);
  },

  // Get a specific plant by ID
  getById: async (id) => {
    return apiRequest(`/plants/${id}`);
  },

  // Create a new plant
  create: async (plantData) => {
    return apiRequest('/plants', {
      method: 'POST',
      body: JSON.stringify(plantData),
    });
  },

  // Update a plant
  update: async (id, plantData) => {
    return apiRequest(`/plants/${id}`, {
      method: 'PUT',
      body: JSON.stringify(plantData),
    });
  },

  // Delete a plant
  delete: async (id) => {
    return apiRequest(`/plants/${id}`, {
      method: 'DELETE',
    });
  },

  // Get featured plants
  getFeatured: async (type = 'most-viewed') => {
    return apiRequest(`/plants/featured?type=${type}`);
  },

  // Advanced search
  search: async (searchData) => {
    return apiRequest('/plants/search', {
      method: 'POST',
      body: JSON.stringify(searchData),
    });
  },
};

// Care guides API functions
export const careGuidesApi = {
  getAll: async (params = {}) => {
    const searchParams = new URLSearchParams(params);
    return apiRequest(`/care-guides?${searchParams}`);
  },

  create: async (guideData) => {
    return apiRequest('/care-guides', {
      method: 'POST',
      body: JSON.stringify(guideData),
    });
  },
};

// Statistics API functions
export const statsApi = {
  get: async () => {
    return apiRequest('/stats');
  },
};

// Health check
export const healthApi = {
  check: async () => {
    return apiRequest('/health');
  },
};

// Seed database (development only)
export const seedApi = {
  seedDatabase: async () => {
    return apiRequest('/seed', {
      method: 'POST',
    });
  },
};