import { API_BASE_URL } from './config';

export async function getAuthors() {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/authors`);
    if (!response.ok) {
        throw new Error('Error getting authors');
    }
    return await response.json();
}