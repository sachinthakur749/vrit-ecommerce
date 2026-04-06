interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-center items-center w-full py-24">
      <div
        className="bg-white rounded-[18px] p-10 text-center max-w-md
                    shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      >
        <p className="text-[19px] font-semibold text-[#1d1d1f] mb-2">
          Something went wrong
        </p>
        <p className="text-[15px] text-[#6e6e73]">{message}</p>
      </div>
    </div>
  );
}
