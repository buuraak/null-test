"use client";

interface ReferralPopUpProps {
    setShowPopup: (value: boolean) => void;
}

export default function ReferralPopUp({ setShowPopup }: ReferralPopUpProps) {
    return (
        <div className="absolute z-10 flex h-screen w-screen items-center justify-center">
            <div onClick={() => setShowPopup(false)} className="absolute h-full w-full bg-black opacity-20" />
            <div className="relative h-[400px] w-[400px] rounded-2xl bg-black p-4">
                <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 cursor-pointer">
                    x
                </button>
            </div>
        </div>
    );
}
