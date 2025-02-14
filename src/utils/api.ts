const API_URL = "https://librarybe-production.up.railway.app"; // Your backend URL

export const fetchBooks = async (search: string = "", page: number = 1, limit: number = 6) => {
  try {
    const queryParams = new URLSearchParams();
    if (search) queryParams.append("q", search);
    queryParams.append("page", page.toString());
    queryParams.append("limit", limit.toString());

    const response = await fetch(`${API_URL}/books?${queryParams.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch books");

    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return { books: [], totalPages: 1 };
  }
};

export const fetchBookById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/books/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching book details:", error);
    return null;
  }
};

export const searchBooks = async (query: string, searchBy: "title" | "author") => {
  try {
    if (!query) return [];

    const response = await fetch(`${API_URL}/books/search?query=${query}&searchBy=${searchBy}`);
    if (!response.ok) throw new Error("Failed to search books");

    return await response.json();
  } catch (error) {
    console.error("Error searching books:", error);
    return [];
  }
};

export const borrowBookRequest = async (borrowData: {
  cardNumber: string;
  fullName: string;
  classOrDepartment: string;
  bookId: string;
  bookTitle: string;
  borrowDate: string;
}) => {
  try {
      const response = await fetch(`${API_URL}/borrow_books/request`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(borrowData),
      });

      if (!response.ok) {
          throw new Error("Failed to borrow the book");
      }

      return await response.json();
  } catch (error) {
      console.error("Error submitting borrow request:", error);
      return null;
  }
};
