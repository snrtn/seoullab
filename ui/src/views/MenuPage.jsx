import { useSearchParams } from "react-router-dom";
import { menuItems } from "../components/navigation/menuItems"; // 경로는 실제 구조에 맞게 수정

export default function MenuPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "lunch"; // 기본값은 'lunch'

  const menu = menuItems.find((item) => item.key === type);

  if (!menu) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">
          Ce menu n'existe pas.
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={menu.image}
        alt={menu.label}
        className="w-full rounded shadow"
      />
    </div>
  );
}
