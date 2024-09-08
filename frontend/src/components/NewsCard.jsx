const NewsCard = ({ article }) => (
  <>
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <img
        src={article.image}
        alt={article.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  </>
);

export default NewsCard;
