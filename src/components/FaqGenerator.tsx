"use client";

import React from "react";
import { useState, FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/lib/auth";
import { loadStripe } from "@stripe/stripe-js";

interface FormData {
  description: string;
  audience: string;
  painPoints: string;
  tone: string;
}

const GENERATION_PRICE = 4.99;
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function FaqGenerator() {
  const { hasPaid, setHasPaid } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedFaq, setGeneratedFaq] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handlePayment = async (data: FormData) => {
    try {
      setIsLoading(true);
      setError(null);

      // Create Stripe Checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { sessionId } = await response.json();

      // Store form data temporarily
      setFormData(data);

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Failed to load Stripe");

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError("Payment failed. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: FormData = {
      description: (
        e.currentTarget.elements.namedItem("description") as HTMLTextAreaElement
      ).value,
      audience: (
        e.currentTarget.elements.namedItem("audience") as HTMLInputElement
      ).value,
      painPoints: (
        e.currentTarget.elements.namedItem("painPoints") as HTMLInputElement
      ).value,
      tone: (e.currentTarget.elements.namedItem("tone") as HTMLSelectElement)
        .value,
    };

    if (!hasPaid) {
      await handlePayment(data);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to generate FAQ");
      }

      const result = await response.json();
      setGeneratedFaq(result.faq);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label
            htmlFor="description"
            className="block text-lg font-medium mb-2 text-white/90"
          >
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-primary-300/50 focus:ring-2 focus:ring-primary-300/20 transition-all duration-200"
            placeholder="Describe your product or service (e.g., A SaaS tool that helps freelancers track time and invoice clients)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label
              htmlFor="audience"
              className="block text-lg font-medium mb-2 text-white/90"
            >
              Target Audience
            </label>
            <input
              type="text"
              id="audience"
              name="audience"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-primary-300/50 focus:ring-2 focus:ring-primary-300/20 transition-all duration-200"
              placeholder="e.g., freelancers, small businesses"
            />
          </div>

          <div className="group">
            <label
              htmlFor="painPoints"
              className="block text-lg font-medium mb-2 text-white/90"
            >
              Pain Points
            </label>
            <input
              type="text"
              id="painPoints"
              name="painPoints"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-primary-300/50 focus:ring-2 focus:ring-primary-300/20 transition-all duration-200"
              placeholder="e.g., clients don't pay on time"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="tone"
            className="block text-lg font-medium mb-2 text-white/90"
          >
            Tone
          </label>
          <select
            id="tone"
            name="tone"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary-300/50 focus:ring-2 focus:ring-primary-300/20 transition-all duration-200"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="relative px-8 py-4 text-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl 
              hover:from-primary-400 hover:to-secondary-400 transform hover:scale-105 transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="relative flex items-center gap-2">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {!hasPaid ? "Redirecting to payment..." : "Generating..."}
                </>
              ) : !hasPaid ? (
                <>Generate FAQ - ${GENERATION_PRICE.toFixed(2)}</>
              ) : (
                "Generate FAQ"
              )}
            </span>
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-300 animate-pulse">
          {error}
        </div>
      )}

      {generatedFaq && (
        <div className="mt-8 animate-fade-in">
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="prose prose-invert max-w-none prose-headings:text-primary-300 prose-a:text-secondary-300">
              <ReactMarkdown>{generatedFaq}</ReactMarkdown>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedFaq);
                }}
                className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/90 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
