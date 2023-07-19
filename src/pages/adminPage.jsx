import SidebarAdmin from "../components/SidebarAdmin";
import ProductContainer from "../features/admin/ProductContainer";

export default function AdminPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <ProductContainer />
      </div>
    </div>
  );
}
