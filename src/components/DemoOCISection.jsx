import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../api/config';

export default function DemoOCISection() {

    const [authors, setAuthors] = useState([]);
    const [authorSearch, setAuthorSearch] = useState('');
    const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);
    const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        authorId: null,
        genreId: null
    });
    const [requestState, setRequestState] = useState({ loading: false, result: null, error: null });
    const [books, setBooks] = useState([]);
    const [isLoadingBooks, setIsLoadingBooks] = useState(false);
    const [genreSearch, setGenreSearch] = useState('');
    const [genres, setGenres] = useState([]);
    const [showNewAuthorModal, setShowNewAuthorModal] = useState(false);
    const [countries, setCountries] = useState([]);
    const [newAuthorData, setNewAuthorData] = useState({
        authorName: '',
        authorLastName: '',
        countryId: null
    });
    const [isCreatingAuthor, setIsCreatingAuthor] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [filterText, setFilterText] = useState('');

    const [documentToDelete, setDocumentToDelete] = useState(null);

    useEffect(() => {
        const loadInitialAuthors = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/portfolio/authors`);
                if (response.ok) {
                    const data = await response.json();
                    console.log("Processed authors:", data);
                    setAuthors(data);
                }
            } catch (error) {
                console.error("Authors loading error:", error);
            }
        };

        const loadInitialBooks = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/portfolio/books`);
                if (response.ok) {
                    const data = await response.json();
                    setBooks(data);
                }
            } catch (error) {
                console.error("Books loading error:", error);
            }
        };

        const loadInitialGenres = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/portfolio/genres`);
                if (response.ok) {
                    const data = await response.json();
                    setGenres(data);
                }
            } catch (error) {
                console.error("Genres loading error:", error);
            }
        };

        const loadCountries = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/portfolio/countries`);
                if (response.ok) {
                    const data = await response.json();
                    setCountries(data);
                }
            } catch (error) {
                console.error("Countries loading error:", error);
            }
        };

        loadInitialAuthors();
        loadInitialBooks();
        loadInitialGenres();
        loadCountries();
    }, []);

    const fetchBooks = async () => {
        setIsLoadingBooks(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/portfolio/books`);
            if (response.ok) {
                const data = await response.json();
                setBooks(data);
            }
        } catch (error) {
            console.error("Books loading error:", error);
        } finally {
            setIsLoadingBooks(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const executeBookTransaction = async (isNewAuthor = false) => {
        setRequestState({ loading: true, result: null, error: null });
        setIsCreatingAuthor(true);

        try {
            const payload = {
                title: formData.title,
                genreId: formData.genreId,
                authorId: formData.authorId,
                ...(isNewAuthor && {
                    newAuthorName: newAuthorData.name,
                    newAuthorLastName: newAuthorData.lastName,
                    newAuthorCountryId: Number(newAuthorData.countryId)
                })
            };

            console.log("Payload a enviar:", JSON.stringify(payload));

            const response = await fetch(`${API_BASE_URL}/api/portfolio/books`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const responseText = await response.text();
            const data = responseText ? JSON.parse(responseText) : {};

            if (!response.ok) throw new Error(data.error || 'Transaction error');

            setRequestState({ loading: false, result: data, error: null });

            setFormData({ title: '', authorId: null, genreId: null });
            setAuthorSearch('');
            setGenreSearch('');
            setNewAuthorData({ name: '', lastName: '', countryId: '' });
            setShowNewAuthorModal(false);

            fetchBooks();
            if (isNewAuthor) {
                const authorsResponse = await fetch(`${API_BASE_URL}/api/portfolio/authors`);
                if (authorsResponse.ok) {
                    const authorsData = await authorsResponse.json();
                    setAuthors(authorsData);
                }
            }

        } catch (error) {
            setRequestState({ loading: false, result: null, error: error.message });
            alert(`Error: ${error.message}`);
        } finally {
            setIsCreatingAuthor(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.genreId) {
            alert("Choose a valid genre from the catalog.");
            return;
        }
        if (!formData.authorId) {
            if (authorSearch.trim() !== '') {
                const nameParts = authorSearch.trim().split(' ');
                const firstName = nameParts[0];
                const lastName = nameParts.slice(1).join(' ');

                setNewAuthorData({ name: firstName, lastName: lastName, countryId: null });
                setShowNewAuthorModal(true); // Abrimos el modal
                return; // Detenemos la ejecución aquí
            } else {
                alert("Author is required. Please select one or enter their name to create it.");
                return;
            }
        }
        executeBookTransaction(false);
    };

    const handleConfirmNewAuthor = () => {
        if (!newAuthorData.countryId) {
            alert("Please select a country for the new author.");
        }
        executeBookTransaction(true);
    };

    const handleDeleteClick = (id) => {
        setDocumentToDelete(id);
    };

    const confirmDelete = async () => {
        if (!documentToDelete) return;

        try {
            const response = await fetch(`${API_BASE_URL}/api/portfolio/books/${documentToDelete}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchBooks();
            } else {
                const data = await response.json();
                alert(`Delete Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Delete Error:", error);
        } finally {
            setDocumentToDelete(null);
        }
    };

    const filteredBooks = books.filter(book => {
        if (!filterText) return true;
        const authorFullName = `${book.authorName || ''} ${book.authorLastName || ''}`.toLowerCase();

        return authorFullName.includes(filterText.toLowerCase());
    });
    console.log("Text searched:", filterText);
    console.log("Filtered books:", filteredBooks);

    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;

    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        } else if (totalPages === 0 && currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [filteredBooks.length, totalPages, currentPage]);

    return (
        <section className="py-2 mt-4 w-full">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">API RESTful & OCI</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Books catalog integrated with Oracle Cloud. Demonstration of views, PL/SQL packages and logical deletion.
                </p>
            </div>

            <div className="max-w-5xl mx-auto w-full flex flex-col gap-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-4">Backend Architecture</h3>
                        <p className="mb-6 text-sm leading-relaxed">
                            Consumption of views (`vw_authors`) for initial loading and execution of centralized PL/SQL packages for structured transactions in Oracle.
                        </p>
                        <div className="space-y-3 text-sm font-mono bg-slate-800 p-5 rounded-xl border border-slate-700 flex-grow">
                            <p className="flex items-center"><span className="text-blue-400 mr-2">GET</span> /api/authors</p>
                            <p className="text-slate-500 text-xs ml-10 mb-2">Catalog Query (OCI View).</p>

                            <p className="flex items-center"><span className="text-green-400 mr-2">POST</span> /api/books</p>
                            <p className="text-slate-500 text-xs ml-10 mb-2">Insert via PL/SQL Package.</p>

                            <p className="flex items-center"><span className="text-red-400 mr-2">DEL</span> /api/books/&#123;id&#125;</p>
                            <p className="text-slate-500 text-xs ml-10">Executes logical deletion (Status).</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Book Registration</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Title</label>
                                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 focus:bg-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">

                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Author</label>
                                    <input
                                        list="authors-list"
                                        value={authorSearch}
                                        onChange={(e) => {
                                            setAuthorSearch(e.target.value);
                                            setFormData(prev => ({ ...prev, authorId: null }));
                                            const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);
                                        }}
                                        onFocus={() => setIsAuthorDropdownOpen(true)}
                                        onBlur={() => setTimeout(() => setIsAuthorDropdownOpen(false), 200)}
                                        required
                                        autoComplete="off"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 focus:bg-white text-sm"
                                        placeholder="Search author..."
                                    />
                                    {isAuthorDropdownOpen && (
                                        <ul className="absolute z-50 w-full bg-white border border-slate-200 shadow-xl max-h-48 rounded-lg mt-1 overflow-y-auto">
                                            {authors
                                                .filter(author => {
                                                    const fullName = `${author.name || author.Name} ${author.lastName || author.LastName} (${author.country || author.Country})`;
                                                    return fullName.toLowerCase().includes(authorSearch.toLowerCase());
                                                })
                                                .map((author, index) => {
                                                    const fullName = `${author.name || author.Name} ${author.lastName || author.LastName} (${author.country || author.Country})`;
                                                    return (
                                                        <li
                                                            key={index}
                                                            onMouseDown={() => {
                                                                const selectedId = author.authorId;
                                                                setAuthorSearch(fullName);
                                                                setFormData(prev => ({ ...prev, authorId: selectedId }));
                                                                setIsAuthorDropdownOpen(false);
                                                            }}
                                                            className="px-4 py-2 hover:bg-blue-50 hover:text-blue-700 cursor-pointer text-sm text-slate-700 transition-colors"
                                                        >
                                                            {fullName}
                                                        </li>
                                                    );
                                                })
                                            }
                                            {authors.filter(a => `${a.name || a.Name} ${a.lastName || a.LastName} (${a.country || a.Country})`.toLowerCase().includes(authorSearch.toLowerCase())).length === 0 && (
                                                <li className="px-4 py-2 text-sm text-slate-400 italic">No authors found.</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Genre</label>
                                    <input
                                        list="genres-list"
                                        value={genreSearch}
                                        onChange={(e) => {
                                            setGenreSearch(e.target.value);
                                            setFormData(prev => ({ ...prev, GenreId: null }));
                                            const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
                                        }}
                                        onFocus={() => setIsGenreDropdownOpen(true)}
                                        onBlur={() => setTimeout(() => setIsGenreDropdownOpen(false), 200)}
                                        required
                                        autoComplete="off"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 focus:bg-white text-sm"
                                        placeholder="Search genre..."
                                    />
                                    {isGenreDropdownOpen && (
                                        <ul className="absolute z-50 w-full bg-white border border-slate-200 shadow-xl max-h-48 rounded-lg mt-1 overflow-y-auto">
                                            {genres
                                                .filter(genre => {
                                                    const genreName = `${genre.description || genre.Description}`;
                                                    return genreName.toLowerCase().includes(genreSearch.toLowerCase());
                                                })
                                                .map((genre, index) => {
                                                    const genreName = `${genre.description || genre.Description}`;
                                                    return (
                                                        <li
                                                            key={index}
                                                            onMouseDown={() => {
                                                                const selectedId = genre.genreId || genre.GenreId;
                                                                setGenreSearch(genreName);
                                                                setFormData(prev => ({ ...prev, genreId: selectedId }));
                                                                setIsGenreDropdownOpen(false);
                                                            }}
                                                            className="px-4 py-2 hover:bg-blue-50 hover:text-blue-700 cursor-pointer text-sm text-slate-700 transition-colors"
                                                        >
                                                            {genreName}
                                                        </li>
                                                    );
                                                })
                                            }
                                            {genres.filter(g => `${g.description || g.Description}`.toLowerCase().includes(genreSearch.toLowerCase())).length === 0 && (
                                                <li className="px-4 py-2 text-sm text-slate-400 italic">No genres found.</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <button type="submit" disabled={requestState.loading} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors disabled:bg-slate-400 mt-4">
                                {requestState.loading ? ' registering...' : 'Save Book'}
                            </button>
                        </form>

                        {requestState.result && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg animate-pulse text-xs text-green-900 overflow-x-auto">
                                {JSON.stringify(requestState.result, null, 2)}
                            </div>
                        )}
                    </div>
                </div>

                {/* === FILA INFERIOR: VISOR GET === */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-slate-800">Active Catalog</h3>
                        <button
                            onClick={fetchBooks}
                            disabled={isLoadingBooks}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center"
                        >
                            {isLoadingBooks ? 'Searching...' : 'Update Table'}
                        </button>
                    </div>
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            placeholder="Filter by author..."
                            value={filterText}
                            onChange={(e) => {
                                setFilterText(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {/* Ícono de lupa (opcional, usa SVG o texto) */}
                        <span className="absolute left-3 top-2.5 text-slate-400">
                            🔍
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 text-xs uppercase border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-3 w-64">Title</th>
                                    <th className="px-4 py-3 w-1/3">Author</th>
                                    <th className="px-4 py-3">Genre</th>
                                    <th className="px-4 py-3 w-24">Country</th>
                                    <th className="px-4 py-3 text-right w-24">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBooks.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-4 py-8 text-center text-slate-400">
                                            {books.length === 0
                                                ? "Loading records or no books available."
                                                : "No books found for that author."}
                                        </td>
                                    </tr>
                                ) : (
                                    currentBooks.map((book, index) => (
                                        <tr key={book.bookId || index} className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="px-4 py-3 font-mono font-semibold text-slate-900">{book.bookTitle}</td>
                                            <td className="px-4 py-3">{book.authorName + " " + book.authorLastName}</td>
                                            <td className="px-4 py-3">{book.genre}</td>
                                            <td className="px-4 py-3">{book.country}</td>
                                            <td className="px-4 py-3 text-right">
                                                <button
                                                    onClick={() => handleDeleteClick(book.bookId)}
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded text-xs font-bold transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    
                                        ))
                                )}
                            </tbody>
                        </table>
                        {filteredBooks.length > 0 && (
                            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-200 sm:px-6 mt-2 rounded-b-lg">
                                <div className="flex flex-col sm:flex-row w-full sm:items-center sm:justify-between gap-3">
                                    <div>
                                        <p className="text-sm text-slate-700 text-center sm:text-left">
                                            Showing <span className="font-semibold">{indexOfFirstBook + 1}</span> to{' '}
                                            <span className="font-semibold">
                                                {Math.min(indexOfLastBook, filteredBooks.length)}
                                            </span>{' '}
                                            of <span className="font-semibold">{filteredBooks.length}</span> records
                                        </p>
                                    </div>
                                    <div className="flex justify-center sm:justify-end">
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                            <button
                                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-500 bg-white border border-slate-300 rounded-l-md hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400"
                                            >
                                                Previous
                                            </button>

                                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-slate-300">
                                                Page {currentPage} of {totalPages}
                                            </span>

                                            <button
                                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                disabled={currentPage === totalPages}
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-500 bg-white border border-slate-300 rounded-r-md hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400"
                                            >
                                                Next
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {documentToDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 transform transition-all">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Confirm Delete</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            Are you sure you want to delete the document with ID <span className="font-bold text-slate-800">{documentToDelete}</span>? This action will execute a logical delete.
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setDocumentToDelete(null)}
                                className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-colors"
                            >
                                Yes, delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {
                showNewAuthorModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transform transition-all">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Create New Author</h3>
                            <p className="text-slate-600 text-sm mb-6">
                                The author does not exist in the catalog. Confirm their details and select a country to register them.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Name(s)</label>
                                    <input
                                        type="text"
                                        value={newAuthorData.name}
                                        onChange={(e) => setNewAuthorData({ ...newAuthorData, name: e.target.value })}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={newAuthorData.lastName}
                                        onChange={(e) => setNewAuthorData({ ...newAuthorData, lastName: e.target.value })}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Country of Origin</label>
                                    <select
                                        value={newAuthorData.countryId}
                                        onChange={(e) => setNewAuthorData({ ...newAuthorData, countryId: e.target.value })}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                                    >
                                        <option value="" disabled>Select a country...</option>
                                        {countries.map((country, idx) => (
                                            <option key={idx} value={country.countryId}>
                                                {country.countryName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => setShowNewAuthorModal(false)}
                                    disabled={isCreatingAuthor}
                                    className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirmNewAuthor}
                                    disabled={isCreatingAuthor}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors disabled:bg-blue-400 flex items-center"
                                >
                                    {isCreatingAuthor ? 'Creating...' : 'Confirm and Create'}
                                </button>
                            </div>
                        </div>
                    </div>
                            )
                        }
                    </section>
                );
}