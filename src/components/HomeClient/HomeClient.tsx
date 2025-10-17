"use client";

import OrderCardButton from "../OrderCardButton/OrderCardButton";
import { useState, useRef } from "react";
import ReferralPopUp from "../ReferralPopUp/ReferralPopUp";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HomeClient() {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);
    const logoRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(logoRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        gsap.fromTo(buttonRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }, []);

    return (
        <div className="relative z-20 flex min-h-screen flex-col items-center justify-center overflow-visible">
            <Image src={"/images/logo/blue-symbol-only.png"} width={50} height={50} alt="Blue symbol only" className="absolute top-8 left-8" />
            {showPopup && <ReferralPopUp setShowPopup={setShowPopup} />}
            <div
                ref={logoRef}
                style={{
                    opacity: 0,
                    transform: `translateY(-${10}px)`,
                    filter: isButtonHovered ? "drop-shadow(0 0 35px rgba(0, 112, 255, 0.4))" : "drop-shadow(0 0 30px rgba(0, 112, 255, 0.3))",
                    transition: "filter 0.4s ease-out",
                }}
                className="overflow-visible"
            >
                {/* <Image src="/images/logo/blue-text-only.png" width={1920} height={1080} alt="Null - Navigate Unseen, Live Limitless" priority className="max-h-[400px] max-w-[400px]" /> */}
                <h1 className="lg:!text-[200px] !text-[150px] text-white">
                    null<span className="text-primary">.</span>
                </h1>
            </div>
            <div ref={buttonRef} style={{ opacity: 0, transform: `translateY(${10}px)` }}>
                <OrderCardButton showPopup={showPopup} setShowPopup={setShowPopup} onHoverChange={setIsButtonHovered} />
            </div>
        </div>
    );
}
