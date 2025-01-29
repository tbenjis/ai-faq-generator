// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  useSearchParams() {
    return {
      get: jest.fn(),
    };
  },
}));

// Mock environment variables
process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "test_key";
process.env.OPENAI_API_KEY = "test_key";
process.env.STRIPE_SECRET_KEY = "test_key";
