import "./SearchResult.css";

export const SearchResult = ({ result, json_obj, setresult_selected }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://media.istockphoto.com/id/1445702264/photo/magnifier-and-yellow-exclamation-point-on-aquamarine-background.jpg?s=1024x1024&w=is&k=20&c=ZiIfj328Uj3EhIHk9hEaIvQtMU_P2kXXfJAwV_Wku2A='; // Set the path to your alternate image here
  };
  const handleClick = () => {
    json_obj(result);
    setresult_selected(true);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') handleClick(); }}
      aria-label={`Select recipe ${result.title}`}
    >
      <div className="record">
        <img src={result['image-url']} alt={result.title} onError={handleImageError} />
        <div className="record-title">{result.title}</div>
      </div>
    </div>
  );
};
