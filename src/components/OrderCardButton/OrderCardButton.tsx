"use client";
import Image from "next/image";

interface OrderCardButtonProps {
    showPopup: boolean;
    setShowPopup: (value: boolean) => void;
    onHoverChange?: (isHovered: boolean) => void;
}

export default function OrderCardButton({ showPopup, setShowPopup, onHoverChange }: OrderCardButtonProps) {
    return (
        <button
            onClick={() => setShowPopup(!showPopup)}
            onMouseEnter={() => onHoverChange?.(true)}
            onMouseLeave={() => onHoverChange?.(false)}
            className="group flex cursor-pointer items-center gap-1 text-white transition-all ease-in-out"
            aria-label="Order card"
        >
            <span>ORDER CARD</span>
            <div className="relative h-[14px] w-[14px] overflow-hidden">
                <Image
                    src="/images/top-right-arrow.svg"
                    width={14}
                    height={14}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:translate-x-[14px] group-hover:-translate-y-[14px]"
                />
                <Image
                    src="/images/top-right-arrow.svg"
                    width={14}
                    height={14}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[14px] translate-y-[14px] transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
            </div>
        </button>
    );
}
