interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-center items-center w-full py-20">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center max-w-md">
        <p className="text-red-600 font-semibold text-lg">
          Something went wrong
        </p>
        <p className="text-red-400 text-sm mt-1">{message}</p>
      </div>
    </div>
  );
}
