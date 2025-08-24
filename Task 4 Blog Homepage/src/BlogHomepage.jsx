import { useState } from "react";

const postsData = [
  {
    id: 1,
    title: "Getting Started with React",
    category: "Tech",
    date: "2025-08-01",
    image: "https://via.placeholder.com/400x200?text=React",
    description: "A beginner’s guide to understanding the basics of React and building your first component."
  },
  {
    id: 2,
    title: "Exploring the Mountains of Hunza",
    category: "Travel",
    date: "2025-07-20",
    image: "https://via.placeholder.com/400x200?text=Hunza",
    description: "A travel diary about my unforgettable journey to the northern areas of Pakistan."
  },
  {
    id: 3,
    title: "Top 5 Street Foods in Lahore",
    category: "Food",
    date: "2025-07-10",
    image: "https://via.placeholder.com/400x200?text=Food",
    description: "Exploring the best street food Lahore has to offer, from gol gappay to shawarma."
  },
  {
    id: 4,
    title: "JavaScript Tips & Tricks",
    category: "Tech",
    date: "2025-07-01",
    image: "https://via.placeholder.com/400x200?text=JS",
    description: "Handy JavaScript techniques every developer should know."
  },
  {
    id: 5,
    title: "Discovering Istanbul",
    category: "Travel",
    date: "2025-06-28",
    image: "https://via.placeholder.com/400x200?text=Istanbul",
    description: "Walking through the rich history and culture of Istanbul."
  }
];

export default function BlogHomepage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter posts by category & search
  const filteredPosts = postsData.filter((post) => {
    const matchCategory = category === "All" || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center shadow">
        <h1 className="text-3xl font-bold">My Personal Blog</h1>
        <p className="mt-2">Thoughts, stories & ideas</p>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 py-6 gap-4">
        {/* Category Filter */}
        <div className="flex gap-3">
          {["All", "Tech", "Travel", "Food"].map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                category === cat ? "bg-blue-600 text-white" : "bg-white border hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          className="px-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Blog Posts */}
      <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{post.date} · {post.category}</p>
              <p className="text-gray-700">{post.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No posts found.</p>
        )}
      </main>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pb-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white border hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
