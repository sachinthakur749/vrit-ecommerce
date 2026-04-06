interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-11 h-11 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                   transition-all flex items-center justify-center text-[15px] text-[#1d1d1f]"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-11 h-11 rounded-full text-[15px] font-medium transition-all ${
            page === currentPage
              ? "bg-[#0071e3] text-white shadow-[0_4px_12px_rgba(0,113,227,0.3)]"
              : "bg-white text-[#1d1d1f] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-11 h-11 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                   transition-all flex items-center justify-center text-[15px] text-[#1d1d1f]"
      >
        →
      </button>
    </div>
  );
}
