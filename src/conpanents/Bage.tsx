
// Bage econponnent yaratish va turli sarflaydi
export default function Bage({type } : any)  {
  return (
    <span className={`inline-block bg-orange-500 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-semibold ${type}`}>{type}</span>
  )
}
