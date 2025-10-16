"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ReferralPopUpProps {
    setShowPopup: (value: boolean) => void;
}

const referralFormSchema = z.object({
    referralCode: z.string().min(1, {
        message: "Referral code is required.",
    }),
});

export default function ReferralPopUp({ setShowPopup }: ReferralPopUpProps) {
    const [isClosing, setIsClosing] = useState(false);
    const form = useForm<z.infer<typeof referralFormSchema>>({
        resolver: zodResolver(referralFormSchema),
        defaultValues: {
            referralCode: "",
        },
    });

    const referralCode = form.watch("referralCode");

    function handleClose() {
        setIsClosing(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 300);
    }

    function onSubmit(values: z.infer<typeof referralFormSchema>) {
        console.log(values);
        // TODO: Handle referral code submission
        handleClose();
    }

    return (
        <div className={`absolute z-10 flex h-screen w-screen items-center justify-center ${isClosing ? "animate-out fade-out duration-300" : "animate-in fade-in duration-300"}`}>
            <div onClick={handleClose} className="absolute h-full w-full bg-black/40 backdrop-blur-sm" />
            <div
                className={`border-primary/20 relative w-full max-w-md rounded-2xl border bg-[#0a0a0a] p-6 ${isClosing ? "animate-out fade-out zoom-out-95 duration-300" : "animate-in fade-in zoom-in-95 duration-300"}`}
            >
                <button onClick={handleClose} className="absolute top-4 right-4 cursor-pointer text-white/50 transition-colors hover:text-white" aria-label="Close">
                    <X className="h-4 w-4" />
                </button>

                <div className="space-y-6">
                    <h3 className="text-center text-white">Referral Code</h3>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="referralCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your referral code"
                                                {...field}
                                                className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/20 focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="h-11 w-full cursor-pointer" disabled={!referralCode || referralCode.trim() === ""}>
                                ORDER CARD
                            </Button>
                        </form>
                    </Form>
                    {(!referralCode || referralCode.trim() === "") && (
                        <button onClick={handleClose} className="cursor-pointer text-center text-xs text-white/50 transition-colors hover:text-white">
                            Order without referral
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
