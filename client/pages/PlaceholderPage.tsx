interface PlaceholderPageProps {
  pageName: string;
}

export default function PlaceholderPage({ pageName }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            {pageName}
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            This page is coming soon. Continue prompting to add content to this
            page.
          </p>
          <div className="inline-flex items-center gap-2 text-green-70">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="font-medium">Ready for content</span>
          </div>
        </div>
      </div>
    </div>
  );
}
