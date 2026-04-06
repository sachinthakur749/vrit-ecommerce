export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full py-32">
      <div className="w-10 h-10 rounded-full border-[2px] border-[#e8e8ed] border-t-[#0071e3] animate-spin" />
    </div>
  );
}
