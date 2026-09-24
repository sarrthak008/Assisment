"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import useAuthStore from "@/store/Auth";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true); 
  const [isProductOpen, setIsProductOpen] = useState(true); 
  const treeRef = useRef(null);
  const sidebarRef = useRef(null);
  const {logout} = useAuthStore()


  useEffect(() => {
    if (!treeRef.current) return;

    if (isProductOpen && isExpanded) {
      gsap.fromTo(
        treeRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(treeRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isProductOpen, isExpanded]);

  return (
    <aside
      ref={sidebarRef}
      className={`h-screen bg-[#F7F7F8] border-r border-gray-200 p-4 flex flex-col justify-between transition-all duration-300 ${
        isExpanded ? "w-[250px]" : "w-[80px]"
      }`}
    >
      {/* Top Section */}
      <div>
        {/* Toggle / Collapse Button Header */}
        <div className={`flex items-center mb-4 ${isExpanded ? "justify-between" : "justify-center"}`}>
          {isExpanded && <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Menu</span>}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-600 hover:bg-gray-200/60 rounded-lg transition-all"
            title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            <i className={`text-lg ${isExpanded ? "ri-menu-fold-line" : "ri-menu-unfold-line"}`}></i>
          </button>
        </div>

        <button 
          className={`w-full flex items-center gap-3 py-2.5 rounded-lg text-gray-700 hover:bg-white transition-all ${
            isExpanded ? "px-3" : "justify-center px-0"
          }`}
          title="Dashboard"
        >
          <i className="ri-dashboard-line text-lg text-gray-600"></i>
          {isExpanded && <span className="text-sm font-medium">Dashboard</span>}
        </button>

        {/* Product Dropdown Section */}
        <div className="mt-1">
          <button
            onClick={() => {
              if (!isExpanded) {
                setIsExpanded(true); 
                setIsProductOpen(true);
              } else {
                setIsProductOpen(!isProductOpen);
              }
            }}
            className={`w-full flex items-center justify-between py-2.5 rounded-lg hover:bg-white transition-all text-gray-900 ${
              isExpanded ? "px-3" : "justify-center px-0"
            }`}
            title="Product"
          >
            <div className="flex items-center gap-3">
              <i className="ri-shopping-bag-3-line text-lg text-gray-800"></i>
              {isExpanded && <span className="text-sm font-semibold cursor-pointer">Product</span>}
            </div>

            {isExpanded && (
              <i
                className={`ri-arrow-down-s-line text-base text-gray-500 transition-transform ${
                  isProductOpen ? "rotate-180" : ""
                }`}
              ></i>
            )}
          </button>

          {isExpanded && (
            <div
              ref={treeRef}
              className="overflow-hidden h-0 opacity-0 relative ml-5 mt-1"
            >
              <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-300"></div>

              {[
                { name: "Dashboard", badge: null, active: true },
                { name: "Drafts", badge: 2 },
                { name: "Released", badge: null },
                { name: "Comments", badge: null },
                { name: "Scheduled", badge: 8 },
              ].map((item) => (
                <div key={item.name} className="relative flex items-center mb-2">
                  <div className="absolute -left-[1px] top-4 w-4 h-5 border-l border-b border-gray-300 rounded-bl-lg"></div>

                  <button
                    className={`ml-4 w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm transition-all ${
                      item.active
                        ? "bg-white shadow-sm font-medium text-black border border-gray-200/60"
                        : "text-gray-500 hover:bg-white/60 hover:text-gray-900"
                    }`}
                  >
                    <span className="cursor-pointer">{item.name}</span>

                    {item.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                          item.badge === 2
                            ? "bg-[#FFD9C8] text-[#D46A2C]"
                            : "bg-[#CFF4DE] text-[#238B45]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

       <div className="border-t bg-black/85 rounded-lg px-1 border-gray-200 pt-4 flex flex-col gap-2">
        {isExpanded ? (
          <div className="flex items-center gap-3 mb-1 px-1">
            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-gray-200 truncate">Emily Parker</p>
              <p className="text-[11px] text-gray-500 truncate">Administrator</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-1">
            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="w-9 h-9 rounded-full object-cover"
              title="Emily Parker (Administrator)"
            />
          </div>
        )}

        <button 
          className={`cursor-pointer w-full flex items-center gap-3 py-2 rounded-lg text-red-600 transition-all text-xs font-medium ${
            isExpanded ? "px-3" : "justify-center px-0"
          }`}
          title="Logout"
          onClick={()=>logout()}
        >
          <i className="ri-logout-box-r-line text-lg"></i>
          {isExpanded && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;